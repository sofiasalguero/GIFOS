const giphyApiKey = '5qEElJm42RMtEkdtUZZnByVqt44ITw8r';
const giphyApiUrl = 'https://api.giphy.com/v1/gifs/';

function getUsers() {
    getData('https://randomuser.me/api/', (data) => {
        console.log(data);
    });
}

function searchGiphys(text, action, limit = 20) {
    const url = giphyApiUrl + 'search' + '?api_key=' + giphyApiKey + '&q=' + text + '&limit=' + limit;
    getData(url, (response) => {
        action(response.data);
    });
}

function trendingGiphys(action, limit = 20, offset = 0) {
    const url = giphyApiUrl + 'trending' + '?api_key=' + giphyApiKey + '&limit=' + limit + '&offset=' + offset;
    getData(url, (response) => {
        action(response.data);
    });
}

function getData(url, action) {
    $.ajax({
        url: url,
        dataType: 'json',
        success: function(data) {
            action(data);
        },
        error: function() {
            console.error("Error al requerir información a " + url);
        }
      });
}