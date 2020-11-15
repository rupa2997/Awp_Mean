let counter = 1;
function increment() {
    let celement = document.querySelector("#counter1");
    counter = counter + 1;
    celement.innerHTML = counter;
}

function decrement() {
    let celement = document.querySelector("#counter1");
    counter = counter - 1;
    celement.innerHTML = counter;
}