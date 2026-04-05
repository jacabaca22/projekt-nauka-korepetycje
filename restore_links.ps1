$htmlFiles = Get-ChildItem -Path ".\html" -Filter "*.html"

$links = @"
    <link rel="stylesheet" href="../css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet">
</head>
"@

foreach ($file in $htmlFiles) {
    $c = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Usuwamy stare linki jeśli przez przypadek zostały jakieś obcięte kawałki
    $c = $c -replace '(?s)<link rel="stylesheet"[^>]*>', ''
    $c = $c -replace '(?s)<link rel="preconnect"[^>]*>', ''
    $c = $c -replace '(?s)<link[^>]*href="https://fonts\.googleapis[^>]*>', ''
    
    # Wstawiamy nowe przed tagiem </head>
    $c = $c -replace '</head>', $links
    
    [System.IO.File]::WriteAllText($file.FullName, $c, [System.Text.Encoding]::UTF8)
}
echo "Naprawione linki HTML"
