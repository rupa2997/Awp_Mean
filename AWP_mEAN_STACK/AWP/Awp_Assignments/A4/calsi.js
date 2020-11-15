function compute() {
    var x = Number(document.getElementById('num1').value);
    var y = Number(document.getElementById('num2').value);
    var z = document.getElementById('opt').value;
    var ans = eval(x + z + y);
    document.getElementById('ans').value = ans;

}