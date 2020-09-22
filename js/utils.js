
function setHtml(htmlElement, content) {
    htmlElement.innerHTML = content;
}

function removeAllChildNodesFrom(htmlElement) {
    if (htmlElement.hasChildNodes()) {
        while (htmlElement.firstChild) {
            htmlElement.removeChild(htmlElement.lastChild);
        }
    }
}

function download(url, name) {
    var a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', name);
    a.setAttribute('target', '_blank');

    a.click();
    a.remove();
} 