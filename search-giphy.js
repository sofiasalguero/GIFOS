const enterKey = 13;
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchTitle = document.getElementById('search-results-title');
let searchPageSize = 10;

function search() {
    const searchText = searchInput.value;
    if(event.keyCode != enterKey) {
        return;
    }

    if (!searchText || searchText == '') {
        alert('Write something to search');
        return;
    }

    removeAllChildNodesFrom(searchResults);

    searchGiphys(searchText, searchPageSize)
    .then(gifs => {
        gifs.forEach(gif => {
            const li = newGiphyItem(gif);
            searchResults.appendChild(li);
        })
    });

    setHtml(searchTitle, searchText);
}