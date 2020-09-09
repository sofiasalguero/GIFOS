
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