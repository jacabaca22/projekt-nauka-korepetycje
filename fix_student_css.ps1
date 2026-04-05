$htmlFiles = Get-ChildItem -Path ".\html" -Recurse -Filter "*.html"

foreach ($file in $htmlFiles) {
    if ($file.Length -gt 0) {
        $c = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
        
        # Oblicz prefiks
        $prefix = "../"
        if ($file.DirectoryName -match "student|tutor") {
            $prefix = "../../"
        }
        
        $links = @"
    <link rel="stylesheet" href="$($prefix)css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet">
"@

        # Usun stare, uszkodzone lub nieaktualne tagi <link>
        $c = $c -replace '(?is)<link[^>]*stylesheet[^>]*>', ''
        $c = $c -replace '(?is)<link[^>]*preconnect[^>]*>', ''
        $c = $c -replace '(?is)<link[^>]*fonts\.googleapis[^>]*>', ''
        
        # Wstaw swieze i dopasowane
        $c = $c -replace '(?i)</head>', "$links`n</head>"
        
        # Dopasuj grafiki i skrypty
        if ($prefix -eq "../../") {
            $c = [regex]::Replace($c, 'src="\.\./img/([^"]+)"', 'src="../../img/$1"')
            $c = [regex]::Replace($c, 'src="\.\./js/([^"]+)"', 'src="../../js/$1"')
        }

        [System.IO.File]::WriteAllText($file.FullName, $c, [System.Text.Encoding]::UTF8)
    }
}
echo "Gotowe!"
