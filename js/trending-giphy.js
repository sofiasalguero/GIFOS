const trendingList = document.getElementById('trending-list');
const goBack = trendingList.getElementsByTagName('li')[0].cloneNode(true);
const goForward = trendingList.getElementsByTagName('li')[1].cloneNode(true);
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

    offset = offset + (pageSize * multiplier);

    removeAllChildNodesFrom(trendingList);

    trendingGiphys(pageSize, offset).then((gifs) => {
        trendingList.appendChild(goBack);

        const gifsList = document.createElement('li');
        gifsList.style.width = '100%';
        
        gifs.forEach(gif => {
            const li = newGiphyItem(gif);
            gifsList.appendChild(li);
        });

        trendingList.appendChild(gifsList);
        trendingList.appendChild(goForward);
    });

    canGoBack = offset >= pageSize;
    goBack.getElementsByTagName('button')[0].disabled = !canGoBack;
}

function getPageSize() {
    
    if (window.matchMedia("(min-width: 800px)").matches) {
        return 3;
    }
    else {
        return 1;
    }
}
