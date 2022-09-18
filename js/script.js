// remove spl char

// ^ - will only print the given condition 

var str = "Ravanthsri20@gm<#$%^&>?:ail.com";
var x = str.replace(/[^<#$%^&>?:.@]/g, "");

console.log(x);

var y = str.replace(/[^a-z]/g, "");
console.log(y);

var z = str.replace(/[^A-Z]/g, "");
console.log(z);


var a = str.replace(/[^0-9]/g, "");
console.log(a);

var b = str.replace(/[a-z]/g, "");
console.log(b);


// take number from a sentance and find sum of the number


var strr = "Ravanthsri1520@gm<#$%545^7&>6?:ail.com";
var c = strr.replace(/[^0-9]/g, "");
var sumnum = c;
console.log(sumnum);
var sum = 0;

while (sumnum != 0) {
    sum = sum + sumnum % 10;
    sumnum = parseInt(sumnum / 10);
}
console.log(sum);