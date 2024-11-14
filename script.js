const sideMenu = document.querySelector('#sideMenu');


function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

function myFunction() {
    location.replace("https://atharva3030.github.io/Travel-Website/")
  }

function myFunction1() {
    location.replace("https://atharva3030.github.io/TextUtils/")
  }
  

//   light mode and dark mode

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
  }