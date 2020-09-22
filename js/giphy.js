const giphyApiKey = '5qEElJm42RMtEkdtUZZnByVqt44ITw8r';
const giphyApiUrl = 'https://api.giphy.com/v1/gifs';

async function getGiphyById(id) {
    const url = giphyApiUrl + '/' + id + '?api_key=' + giphyApiKey;
    const res = await getData(url);
    return res.data;
}

async function getGiphysByIds(ids) {
    const q = ids.join();
    const url = giphyApiUrl + '?api_key=' + giphyApiKey + '&ids=' + q;
    const res = await getData(url);
    return res.data;
}

async function searchGiphys(text, limit = 20) {
    const url = giphyApiUrl + '/search' + '?api_key=' + giphyApiKey + '&q=' + text + '&limit=' + limit;
    const res = await getData(url);
    return res.data;
}

async function trendingGiphys(limit = 20, offset = 0) {
    const url = giphyApiUrl + '/trending' + '?api_key=' + giphyApiKey + '&limit=' + limit + '&offset=' + offset;
    const res = await getData(url);
    return res.data;
}

async function getData(url) {
    try 
    {
        const res = await fetch(url);
        return await res.json();
    }
    catch (error) 
    {
        console.error("Error al requerir información a " + url);
        return error;
    }
}