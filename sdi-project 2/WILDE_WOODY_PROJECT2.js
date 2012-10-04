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
var namCheck = function ( p , strName) {
        
    if (p === strName) {
         console.log("true ?");
    } else {
         console.log("false ?");
    
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
var strFun = function(nam1,nam2){
    var bestFriends = " were best friends at one time.";
    bestFriends = nam1 + " and " +nam2 + bestFriends;

return bestFriends;

};

/*Array Function
var arrfun = function (){
    
};
*/


//code execution
console.log(strFun(p,strName));                                             //String Function


addition(23);                                                    //Procedure
namCheck(console.log("What if everything you knew was "+ name));   //Boolean<---- is not displaying in console correctly!
ageCheck(5);                                                     //Number Function


