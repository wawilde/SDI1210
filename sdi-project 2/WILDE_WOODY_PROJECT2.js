//alert("JavaScript works!");

/* Woody Wilde
 * 10-1-2012
 * SDI 1209
 * Project 2
 */

// declare global variables
var strName = "Woody";
var numAge = 41;
var arrStates = [ Florida, Georgia, Tennesee, Kentucky, Indiana ];
var arg1 = 23;
var arg2 = 19;
var funcNum = arg1 + arg2;

//procedure
var addition = function (num1){
    var sum = num1 + 5;
        if (sum >= 10) {
        console.log("The total of " + num1 + " plus 5 is : " + sum);
    } else {
    console.log("When " + num1 + " is added to 5 it totals " + sum + ".");
    
};

//boolean function
 
    var booFunc = function (arg1, arg2){
        if (arg1 > arg2){ 
            console.log(arg1 + " is greater than " + arg2);
            if (arg1 < arg2){
                console.log("I think " + arg2 + " is less than " + arg1);  
            } else { 
                console.log("Aha! Proof that " + arg2 + " is greater than " + arg1);
            };
        } else { 
            console.log(arg2 + " is less than " + arg1);
        };
        return funcNum;
    };

/* Number function
function(){
    if (){
        
    } else {
        
    };
};
*/




/*String function
function( ){
    if (){
        
    } else {
        
    };
};

*/


/*Array function
function( ){
    if (){
        
    } else {
        
    }:
};


*/



//code execution
addition(23, 19);       //Procedure
booFunc(arg1,arg2);     //boolean function
console.log("But if you add " + arg1 + " and " + arg2 + " the answer is " + funcNum);   //Boolean return
