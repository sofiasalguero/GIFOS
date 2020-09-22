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
    
    const imgNode = document.createElement('img');
    imgNode.classList.add('img-guia');
    imgNode.setAttribute('src', img.url);
    imgNode.setAttribute('width', img.width);
    imgNode.setAttribute('height', img.height);
    imgNode.setAttribute('alt', gif.title);
    li.appendChild(imgNode);

    const buttons = appendButtons.cloneNode(true);
    const favBtn = buttons.querySelector('.btn-fav');
    const downloadBtn = buttons.querySelector('.btn-download');
    const maxBtn = buttons.querySelector('btn-max');
    
    downloadBtn.addEventListener('click', () => download(img.url, gif.id + '.gif'));

    if (existsGif(gif.id)) {
        favBtn.getElementsByTagName('img')[0].setAttribute('src', './images/icon-fav-active.svg');
    }

    favBtn.addEventListener('click', () => {
        const isFavorite = existsGif(gif.id);
        if (isFavorite) {
            favBtn.getElementsByTagName('img')[0].setAttribute('src', './images/icon-fav-hover.svg');
            removeFavorito(gif.id);
        } else {
            favBtn.getElementsByTagName('img')[0].setAttribute('src', './images/icon-fav-active.svg');
            addFavorito(gif.id);
        }
    });

    li.appendChild(buttons);
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


class UI { 
    constructor(trendingGiphys) {
        this.trendingGiphys = trendingGiphys;
    }
}

let ui = new UI();

document.addEventListener("DOMContentLoaded", (event) => {
    ui = new UI(new TrendingGiphys())
  });