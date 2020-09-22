const trendingList = document.getElementById('trending-list');
const goBack = trendingList.getElementsByTagName('li')[0].cloneNode(true);
const goForward = trendingList.getElementsByTagName('li')[1].cloneNode(true);
const pageSize = getPageSize();

goBack.addEventListener('click', () => ui.trendingGiphys.load(-1));
goForward.addEventListener('click', () => ui.trendingGiphys.load(1));

function getPageSize() {
    
    if (window.matchMedia("(min-width: 800px)").matches) {
        return 3;
    }
    else {
        return 1;
    }
}

class TrendingGiphys {
    offset = 0;
    canGoBack = false;

    constructor() {
        this.load(0);
    }

    load(multiplier) {
        if (!this.canGoBack && multiplier < 0) {
            return;
        }
    
        this.offset = this.offset + (pageSize * multiplier);
    
        removeAllChildNodesFrom(trendingList);
    
        trendingGiphys(pageSize, this.offset).then((gifs) => {
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
    
        this.canGoBack = this.offset >= pageSize;
        goBack.getElementsByTagName('button')[0].disabled = !this.canGoBack;
    }
}