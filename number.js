var orangePrice = 20; // number(int)
var chocolate = 0.5; // number(float)
var redPrice = "20"; //string

// changing number type
var yellowPrice = parseInt("25");
var marks = parseFloat(93);
var money = parseInt("Twenty"); // NaN
console.log(typeof chocolate);

var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total); //0.3000000000000004
// to fix this type of problem need toFixed() method
console.log(total.toFixed(2));
