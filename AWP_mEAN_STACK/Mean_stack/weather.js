
let weather = () => {
    let xhr = new XMLHttpRequest();
    let cityName = document.getElementById("cityname").value;
    console.log(cityName);
    //let url = "https://api.openweathermap.org/data/2.5/weather?appid=09f7db8a655951c94fbb718edacf4d1d&units=metric&q=" + cityName;
    let url = "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
        cityName;
    // let url = "https://api.openweathermap.org/data/2.5/weather?appid=09f7db8a655951c94fbb718edacf4d1d&q=mumbai";
    xhr.open('GET', url);
    xhr.onload = () => {
        let weather = JSON.parse(xhr.responseText);
        console.log(weather);
        identifyTemp(weather);
    }
    xhr.send();
};

let identifyTemp = (weather1) => {
    const child11 = document.getElementById("child1");
    const child22 = child11.children[0].cloneNode(true);
    child22.style.display = "flex";
    child22.children[0].children[0].innerHTML = weather1.name;
    child22.children[1].children[0].innerHTML = weather1.main.temp;
    child22.children[2].children[0].innerHTML = weather1.sys.country;
    child22.children[3].children[0].innerHTML = weather1.weather[0].description;
    child22.children[4].children[0].innerHTML = weather1.main.humidity;
    child22.children[5].innerHTML = `<img src="icons/${weather1.weather[0].icon}.png"/>`;
    //child22.children[2].style.background = "#fff";
    child11.appendChild(child22);
    document.querySelector("#cityname").value = "";
}  