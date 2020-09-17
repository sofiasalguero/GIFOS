let darkMode= false;
const btnSwitch = document.getElementById('switch');
const bodyClassList = document.body.classList;
const navbarClassList = document.getElementById('navbar').classList;
const appendButtons = document.getElementById('append-buttons').cloneNode(true);
document.getElementById('append-buttons').remove();

const newGiphyItem = (gif) => {
    const li = document.createElement('li');
    li.classList.add('botones');
    const img = gif.images.original;
    const isFavorite = existsGif(gif.id);
    if (isFavorite) {
        li.addEventListener('click', () => removeFavorito(gif.id));
    } 
    else {
        li.addEventListener('click', () => addFavorito(gif.id));
    }
    const imgNode = document.createElement("img");
    imgNode.classList.add('img-guia');
    imgNode.setAttribute('src', img.url);
    imgNode.setAttribute('width', img.width);
    imgNode.setAttribute('height', img.height);
    imgNode.setAttribute('alt', gif.title);
    li.appendChild(imgNode);
    li.appendChild(appendButtons.cloneNode(true));
    return li;
};

btnSwitch.addEventListener('click', () => {
    darkMode = !darkMode;
    
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
});
