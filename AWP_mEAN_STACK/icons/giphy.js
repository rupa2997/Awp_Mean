let url = "https://api.giphy.com/v1/gifs/search?api_key=lff4uWGMFSPBkrxbTA22sDur8GmAnQgB&q=happy";

let Clickimages = () => {
    let myreq = new XMLHttpRequest()
    myreq.open('GET', url)
    myreq.onload = () => {
        let myresponse = JSON.parse(myreq.responseText)
        console.log(myresponse.data)
        displayImages(myresponse.data)
    }
    myreq.send();
}

function displayImages(myresponse) {

}