//alert("JavaScript works!");

/* Woody Wilde
 * 10-1-2012
 * SDI 1209
 * Project 2
 */

// declare global variables
var strName = "Zaphod Beablebrox";
var numAge = 10;
var p = "Ford Fairlane"
var arrStates = [Florida, Georgia, Tennessee, Kentucky, Indiana];

//Procedure ---- WORKING DO NOT MESS WITH!
var addition = function (num1){
    var sum = num1 + 19;
        if (sum >= 10) {
        console.log("The total of " + num1 + " plus 19 is : " + sum);
    } else {
        console.log("When " + num1 + " is added to 19 it totals " + sum + ".");
    
    };
};

//Boolean Function ---- WORKING DO NOT MESS WITH!
var namCheck = function () {
    if (p === strName) {
        var name = console.log("false ?");
    } else {
        var name = console.log("true ?");
    
    };
};

//Number Function ---- WORKING DO NOT MESS WITH!
var i = 1;
var ageCheck = function(num){
    
        while (i < num){
            console.log(i + " month's reading Douglas Adams." );
            i++;
    }; console.log(i + " months, that's how long it took me to read The Hitchikers Giude to the Galaxy.");
  return i*i;
};

//String Function ---- WORKING DO NOT MESS WITH!
var strfun = function(nam1,nam2){
    
    return (console.log(nam1 + " and " + nam2 + " were best friends at one time."));
    
};

//Array Function



//code execution
addition(23);       //Procedure
namCheck(console.log("What if everything you knew was "+ name)); // <---- is not displaying in console correctly!
ageCheck(5);
strfun("ford","Zaphod");
