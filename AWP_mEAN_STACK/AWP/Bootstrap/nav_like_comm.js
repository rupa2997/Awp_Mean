let commenthere = function (commentbtn) {
    const commentbox = commentbtn.parentElement.parentElement.parentElement.children[2];
    let newElement = commentbox.children[0].cloneNode(true);
    newElement.style.visibility = "visible";
    const inputEle = commentbtn.parentElement.parentElement.children[1].children[0];
    newElement.children[0].innerHTML = inputEle.value;

    commentbox.insertBefore(newElement, commentbox.firstChild);
    inputEle.value = "";

}

let deletecomm = function (deletecomm) {
    deletecomm.parentElement.parentElement.remove();
}

let deleteAll = function (deleteBtn) {
    while (deleteBtn.parentElement.parentElement.parentElement.children[2].children[1]) {
        deleteBtn.parentElement.parentElement.parentElement.children[2].removeChild(deleteBtn.parentElement.parentElement.parentElement.children[2].firstChild);
    }
}

let likeBtn = function (likebtn) {
    let count1 = likebtn.children[0].innerHTML;
    count1++;
    likebtn.children[0].innerHTML = count1;
}

let disLike = function (dislikeBtn) {
    let count1 = dislikeBtn.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].innerHTML;
    count1--;
    if (count1 > -1) {
        dislikeBtn.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].innerHTML = count1;
    }
}

let EditComm = function (editEle) {
    let inputcomm = editEle.parentElement.parentElement.children[0].innerHTML;
    editEle.parentElement.parentElement.parentElement.parentElement.children[1].children[1].children[0].value = inputcomm;
    editEle.parentElement.parentElement.remove();

}
let cutBtn = function (cutComm) {
    let cutBtnn = cutComm.parentElement.parentElement.children[0].innerHTML;
    cutComm.parentElement.parentElement.children[0].innerHTML = ("<del>" + cutBtnn + "</del>");


}