//alert("JavaScript works!");

/* Woody Wilde
 * 10-1-2012
 * SDI 1209
 * Project 2
 */

// declare global variables
var strName = "Woody";
var numAge = 41;
//var arrStates = [Florida, Georgia, Tennesee, Kentucky, Indiana];

//procedure
//var addition = function (num1, num2){
//    var sum = num1 + num2;
//    
//    return sum;
//};

//boolean function
var arg1 = 2;
var arg2 = 19;
var funcNum = arg1 + arg2;  
    var booFunc = function (arg1, arg2){
        if (arg1 > arg2 === true){ 
            console.log(arg1 + " is greater than " + arg2);
            if (arg1 < arg2 === false){
                console.log("I think " + arg2 + " is less than " + arg1);  
            } else { 
                console.log("Aha! Proof that " + arg2 + " is greater than " + arg1);
            };
        } else { 
            console.log(arg2 + "is less than " + arg1);
        };
        return funcNum;
    };
booFunc(arg1,arg2);
console.log("But if you add " + arg1 + " and " + arg2 + " the answer is " + funcNum);   







// Number function






//String function





//Array function








//code execution
//console.log("The answer to Life, The Universe and Everything is " + addition(10, 32));
//console.log(""  + funcnum); 
