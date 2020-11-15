let login = function (loginEle) {
    let loginDe = loginEle.parentElement.parentElement.parentElement.parentElement.parentElement.children[1];
    const newEle = loginDe.children[0].cloneNode(true);
    newEle.style.visibility = "visible";
    newEle.children[1].children[0].style.visibility = "visible";
    let uname1 = loginEle.parentElement.parentElement.children[0].children[1];
    let pawd1 = loginEle.parentElement.parentElement.children[1].children[1];
    newEle.children[0].children[0].innerHTML = uname1.value;
    newEle.children[1].children[0].innerHTML = pawd1.value;
    if (uname1.value == "" | pawd1.value == "") {
        alert("username or password is empty");
        return;
    }
    else {

        loginDe.insertBefore(newEle, loginDe.firstChild);
    }
    loginEle.parentElement.parentElement.children[0].children[1].value = "";
    loginEle.parentElement.parentElement.children[1].children[1].value = "";


}