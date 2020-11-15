let commenthere = function (btnElementComment) {
    const commentbox = btnElementComment.parentElement.parentElement.parentElement.children[2];
    let newElement = commentbox.children[0].cloneNode(true);
    newElement.style.visibility = "visible";
    const inputcom = btnElementComment.parentElement.parentElement.children[1].children[0];
    newElement.children[0].innerHTML = inputcom.value;
    inputcom.value = "";
    commentbox.insertBefore(newElement, commentbox.firstChild);
}

let deleteComment = function (deleteComment) {
    deleteComment.parentElement.parentElement.remove();
}

let deleteCommentAll = function (deleteall) {
    while (deleteall.parentElement.parentElement.children[2].firstChild) {
        deleteall.parentElement.parentElement.children[2].removeChild(deleteall.parentElement.parentElement.children[2].firstChild);
    }

}

