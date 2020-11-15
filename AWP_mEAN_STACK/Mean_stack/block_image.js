let list1 = [
    {
        img: '<img style="background-position:center;background-size:cover;" src="https://picsum.photos/id/124/200/200"></img>',
    },
    {

        img: '<img src="https://picsum.photos/id/774/200/200"></img>',
    },
    {
        img: '<img src="https://picsum.photos/id/334/200/200"></img>',
    },
    {

        img: '<img src="https://picsum.photos/id/497/200/200"></img>',
    },
    {
        img: '<img src="https://picsum.photos/id/5/200/200"></img>',
    },
    {

        img: '<img src="https://picsum.photos/id/84/200/200"></img>',
    },
    {
        img: '<img src="https://picsum.photos/id/836/200/200"></img>',
    },
    {

        img: '<img src="https://picsum.photos/id/387/200/200"></img>',
    },
    {
        img: '<img src="https://picsum.photos/id/123/200/200"></img>',
    },
    {

        img: '<img src="https://picsum.photos/id/111/200/200"></img>',
    },
    {

        img: '<img src="https://picsum.photos/id/387/200/200"></img>',
    }];







window.addEventListener("load", () => {
    console.log("ON.LOAD");
    let xhr = new XMLHttpRequest;
    xhr.open("GET", "https://reqres.in/api/users?page=2");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);
            let sjson = JSON.parse(xhr.responseText);
            console.log(sjson.data);
            clickImages1(sjson.data);
        }
    };
    xhr.send();
});

function clickImages1(list) {
    for (i = 0; i < list.length; i++) {
        let items = list[i];
        let list2 = list1[i];
        let main2 = document.getElementById("main1");
        let middle2 = document.getElementById("middle1").cloneNode(true);
        middle2.children[1].innerHTML = items.first_name + " " + items.last_name;
        middle2.children[0].innerHTML = list2.img;
        // middle2.children[0].style.backgroundsize = "cover";
        // middle2.children[0].style.objectfit = "cover";
        //middle2.children[0].style.position = "center";
        main2.insertBefore(middle2, main2.firstChild);

    }

}