let darkMode= false;
const btnSwitch = document.getElementById('switch');
const classList = document.body.classList;

const newGiphyItem = (gif) => {
    const li = document.createElement('li');
    const img = gif.images.original;
    const isFavorite = existsGif(gif.id);
    if (isFavorite) {
        li.addEventListener('click', () => removeFavorito(gif.id));
    } 
    else {
        li.addEventListener('click', () => addFavorito(gif.id));
    }
    const imgNode = document.createElement("img");
    imgNode.setAttribute('src', img.url);
    imgNode.setAttribute('width', img.width);
    imgNode.setAttribute('height', img.height);
    imgNode.setAttribute('alt', gif.title);
    li.appendChild(imgNode);
    return li;
};

btnSwitch.addEventListener('click', () => {
    darkMode = !darkMode;
    
    if (darkMode) {
        setHtml(btnSwitch, 'Modo Diurno');
        classList.add('dark');
    }
    else {
        setHtml(btnSwitch, 'Modo Nocturno');
        classList.remove('dark');
    }
});
