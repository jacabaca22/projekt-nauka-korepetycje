   const zapisanyLogin = localStorage.getItem('zalogowanyUser');
        function rozsunKarte() {
            const dropdown = document.getElementById('dropdown');
            dropdown.classList.toggle('active');
        }
    if(zapisanyLogin != null){
        document.querySelector('.zaloguj-ikonka').style.display = 'none';
        document.querySelector('.zarejestruj-ikonka').style.display = 'none';
        document.querySelector('.user-menu').style.display = 'block';
        
    }
    else{
        document.querySelector('.zaloguj-ikonka').style.display = 'block';
        document.querySelector('.zarejestruj-ikonka').style.display = 'block';
        document.querySelector('.user-menu').style.display = 'none';
    }
       