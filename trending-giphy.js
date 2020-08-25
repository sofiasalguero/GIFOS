const loadLessBtn = document.getElementById('load-less-btn');
const trendingList = document.getElementById('trending-list');
const pageSize = getPageSize();
let offset = 0;
let canGoBack = false;

// OnInit
loadTrendingGiphys(0);
//

function loadTrendingGiphys(multiplier) {
    if (!canGoBack && multiplier < 0) {
        return;
    }

    var trendingHtml = '';
    offset = offset + (pageSize * multiplier);

    trendingGiphys((gifs) => {
        gifs.forEach(gif => {
            const img = gif.images.original;
            trendingHtml += '<li><img src='+ img.url +' width='+ img.width +' height='+ img.height +' alt="'+ gif.title +'"></li>';
        })
        setHtml(trendingList, trendingHtml);
    }, pageSize, offset);

    canGoBack = offset >= pageSize;
    loadLessBtn.disabled = !canGoBack;
}

function getPageSize() {
    
    if (window.matchMedia("(min-width: 800px)").matches) {
        return 3;
    }
    else {
        return 1;
    }
}
