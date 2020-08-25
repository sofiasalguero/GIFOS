let darkMode= false;
const btnSwitch = document.getElementById('switch');
const classList = document.body.classList;


function switchClick() {
    darkMode = !darkMode;
    afterSwitchModeChanged();
}

function afterSwitchModeChanged() {
    if (darkMode) {
        setHtml(btnSwitch, 'Modo Diurno');
        classList.add('dark');
    }
    else {
        setHtml(btnSwitch, 'Modo Nocturno');
        classList.remove('dark');
    }
}

function setHtml(htmlElement, content) {
    htmlElement.innerHTML = content;
}