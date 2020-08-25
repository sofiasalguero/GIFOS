const trendingList = document.getElementById('trending-list');
let pageSize = getPageSize();
let offset = 0;

loadTrendingGiphys();

function loadTrendingGiphys() {
    var trendingHtml = trendingList.innerHTML;
    trendingGiphys((gifs) => {
        gifs.forEach(gif => {
            const img = gif.images.original;
            trendingHtml += '<li><img src='+ img.url +' width='+ img.width +' height='+ img.height +' alt="'+ gif.title +'"></li>';
        })
        setHtml(trendingList, trendingHtml);
    }, pageSize, offset);
    offset += pageSize;
}

function setHtml(htmlElement, content) {
    htmlElement.innerHTML = content;
}

function getPageSize() {
    
    if (window.matchMedia("(min-width: 800px)").matches) {
        return 3;
    }
    else {
        return 1;
    }
}
