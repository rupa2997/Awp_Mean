let My_mod1 = require('./my_mod1.js');
let My_mod2 = require('./my_mod2.js');
//const My_mod2 = require('./my_mod2.js');
const My_mod3 = require('./my_mod3.js');
//const my_mod3 = require('./my_mod3.js');

let totalSum = My_mod2.sum(10, 20);
//console.log(My_mod2.sum(10, 20));
console.log("TotalSUm", totalSum);
console.log("Diff", My_mod2.diff(20, 10));
console.log(My_mod1.My_App);
console.log(My_mod1.My_Name);
console.log(My_mod1.PI);
console.log(My_mod1);
console.log(My_mod3.arr[0]);