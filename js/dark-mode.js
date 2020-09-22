const darkModeKey = 'dark-mode';
const btnSwitch = document.getElementById('switch');
const bodyClassList = document.body.classList;
const navbarClassList = document.getElementById('navbar').classList;

let darkMode = getDarkMode();

function getDarkMode() {
    return localStorage.getItem(darkModeKey) == 'true';
}

function saveDarkMode(value){
    localStorage.setItem(darkModeKey, value);
}

function darkModeLoad() {
    if (darkMode) {
        setHtml(btnSwitch, 'Modo Diurno');
        bodyClassList.add('dark');
        navbarClassList.add('dark');
    }
    else {
        setHtml(btnSwitch, 'Modo Nocturno');
        bodyClassList.remove('dark');
        navbarClassList.remove('dark');
    }
}

darkModeLoad();

btnSwitch.addEventListener('click', () => {
    darkMode = !darkMode;
    saveDarkMode(darkMode);
    darkModeLoad();
});