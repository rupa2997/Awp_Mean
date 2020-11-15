let likeCounter = 1;
let commentcounter = 1;

function likehere() {
    likeCounter++;
    let btn = document.querySelector("#btn1");
    btn.innerHTML = "Like" + " " + likeCounter;

}

/*function commenthere() {
    let inputcomment = document.querySelector("#comment").value;
    const comment = document.createElement("div");
    comment.style.display = "flex";
    comment.style.justifyContent = "space-around";
    comment.style.margin = "5px";
    comment.style.background = "pink";
    comment.style.padding = "2px";
    const child1 = document.createElement("div");
    child1.innerHTML = inputcomment;
    const child2 = document.createElement("button");
    child2.innerHTML = "Delete";
    comment.appendChild(child1);
    comment.appendChild(child2);
    let commentbox = document.querySelector("#commentbox");
    commentbox.insertBefore(comment, commentbox.firstChild);
    document.querySelector("#comment").value = "";
}
*/

function deletehere(ele) {
    ele.parentElement.remove();
}
function commenthere() {
    let input1 = document.querySelector("#comment").value;
    if (input1 == "")
        return;
    const ele = document.querySelector("#reference").cloneNode(true);
    ele.removeAttribute("id");
    ele.style.visibility = "visible";
    ele.children[0].innerHTML = input1;
    const commentbox = document.querySelector("#commentbox");
    commentbox.insertBefore(ele, commentbox.firstChild);
    document.querySelector("#comment").value = "";
}