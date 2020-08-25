const enterKey = 13;
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchTitle = document.getElementById('search-results-title');
let searchPageSize = 10;
let lastSearch = null;

function search() {
    const searchText = searchInput.value;
    if(event.keyCode != enterKey) {
        return;
    }

    if (!searchText || searchText == '') {
        alert('Write something to search');
        return;
    }
    
    var searchResultsHtml = '';
    searchGiphys(searchText, (gifs) => {
        gifs.forEach(gif => {
            const img = gif.images.original;
            searchResultsHtml += '<li><img src='+ img.url +' width='+ img.width +' height='+ img.height +' alt="'+ gif.title +'"></li>';
        })
        setHtml(searchResults, searchResultsHtml);
    }, searchPageSize);
    setLastSearch(searchText);
}

function setLastSearch(searchText) {
    lastSearch = searchText;
    setHtml(searchTitle, searchText);
}