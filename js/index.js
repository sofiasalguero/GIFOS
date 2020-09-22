const appendButtons = document.getElementById('append-buttons').cloneNode(true);
const modal = document.getElementById('modal-max-gifo');

document.getElementById('append-buttons').remove();

const getImgFromGif = (gif) => gif.images.original;

function openModal(gif) {
    const content = modal.querySelector('.modal-content');
    const gifoContent = modal.querySelector('.gifo-modal');
    const imgNode = gifoContent.getElementsByTagName('img')[0];
    const gifTitle = content.querySelector('.gif-title');
    const botonesContent = content.querySelector('#botones-modal');
    const botonesNode = botonesContent.getElementsByTagName('div')[0];
    const gifImg = getImgFromGif(gif);

    gifTitle.innerHTML = gif.title;

    if (imgNode) {
        imgNode.replaceWith(newGiphyImg(gifImg, gif.title));
    } else {
        gifoContent.appendChild(newGiphyImg(gifImg, gif.title));
    }

    const buttons = newButtons(gif, false);

    if (botonesNode) {
        botonesNode.replaceWith(buttons);
    } else {
        botonesContent.appendChild(buttons);
    }

    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

const newButtons = (gif, withMax = true) => {
    const buttons = appendButtons.cloneNode(true);
    const favBtn = buttons.querySelector('.btn-fav');
    const downloadBtn = buttons.querySelector('.btn-download');
    const maxBtn = buttons.querySelector('.btn-max');
    const gifImg = getImgFromGif(gif);
    
    downloadBtn.addEventListener('click', () => download(gifImg.url, gif.id + '.gif'));

    if (withMax) {
        maxBtn.addEventListener('click', () => openModal(gif));
    } else {
        maxBtn.style.display = 'none';
    }

    if (existsGif(gif.id)) {
        favBtn.getElementsByTagName('img')[0].setAttribute('src', './images/icon-fav-active.svg');
    }

    favBtn.dataset.id = gif.id;
    favBtn.addEventListener('click', () => {
        const isFavorite = existsGif(gif.id);
        const allFavs = document.querySelectorAll('.btn-fav');

        allFavs.forEach(btn => {
            if (btn.dataset.id != gif.id) {
                return;
            }
            const svgStyle = isFavorite ? 'hover' : 'active';
            btn.getElementsByTagName('img')[0].setAttribute('src', './images/icon-fav-' + svgStyle + '.svg');
        });

        if (isFavorite) {
            removeFavorito(gif.id);
        } else {
            addFavorito(gif.id);
        }
    });

    return buttons;
};

const newGiphyImg = (gif, title) => {
    const img = document.createElement('img');

    img.classList.add('img-guia');
    img.setAttribute('src', gif.url);
    img.setAttribute('width', gif.width);
    img.setAttribute('height', gif.height);
    img.setAttribute('alt', title);

    return img;
};

const newGiphyItem = (gif) => {
    const li = document.createElement('li');
    li.classList.add('botones');
    const gifImg = getImgFromGif(gif);
    
    const imgNode = newGiphyImg(gifImg, gif.title);
    const buttons = newButtons(gif);

    li.appendChild(imgNode);
    li.appendChild(buttons);
    return li;
};


class UI { 
    constructor(trendingGiphys) {
        this.trendingGiphys = trendingGiphys;
    }
}

let ui = new UI();

document.addEventListener("DOMContentLoaded", (event) => {
    ui = new UI(new TrendingGiphys())
  });