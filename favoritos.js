const favKey = 'gifos-fav';
const idsFavoritos = getFavoritosFromLocalStorage();

function getFavoritosFromLocalStorage() {
    const favs = localStorage.getItem(favKey);
    if (favs) {
        return JSON.parse(favs);
    }
    return [];
}

function updateLocalStorageFavs(){
    const favString = JSON.stringify(idsFavoritos);
    localStorage.setItem(favKey, favString);
}

function addFavorito(id) {
    if (existsGif(id)){
        return;
    }
    idsFavoritos.push(id);
    updateLocalStorageFavs();
}

function removeFavorito(id) {
    if (existsGif(id)) {
        const index = idsFavoritos.indexOf(id);
        if (index > -1) {
            idsFavoritos.splice(index, 1);
            updateLocalStorageFavs();
        }
    }
}

function existsGif(id) {
    return idsFavoritos.some(gId => gId === id);
}