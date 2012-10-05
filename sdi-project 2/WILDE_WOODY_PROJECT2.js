//alert("JavaScript works!");

/* Woody Wilde
 * 10-1-2012
 * SDI 1209
 * Project 2
 */

// declare global variables
var strName = "Zaphod Beablebrox";
var numAge = 10;
var magicNum = 42;
var strName2 = "Ford Fairlane";
var characterArr = ["Trillian", "Arthur", "Marvin 'the depressed android'"];


//Procedure ---- WORKING DO NOT MESS WITH!
var addition = function (num1){
    var sum = num1 + 19;
        if (sum >= 10) {
        console.log("The total of " + num1 + " plus 19 is : " + sum);
    } else {
        console.log("When " + num1 + " is added to 19 it totals " + sum + ".");
    
    };
};

//Boolean Function ---- 
var numCheck = function (numAge, magicNum){
     var name;  
    if (numAge === magicNum) {
         
        return (name = true);
    } else {
         
        return (name = false);
    };
if (name === true){
        console.log("The computer replied true ?");
    } else {
        console.log("The computer replied false ?");  
};
};

//Number Function ---- WORKING DO NOT MESS WITH!
var i = 1;
var timeCheck = function(num){
    
        while (i < num){
            console.log(i + " year's calculating and running numbers." );
            i++;
    }; console.log(i + " generations had passed, and then suddenly... ");
  return i;
};

//String Function ---- WORKING DO NOT MESS WITH!
var strFun = function(nam1,nam2){
    var bestFriends = " were best friends at one time.";
    bestFriends = nam1 + " and " +nam2 + bestFriends;

return bestFriends;

};

//Array Function
var arrFun = function (numAge, characterArr){
    var index = characterArr.index;
    
    
    if(characterArr.length === 2){
        console.log("There are other characters in the book but i can only remember " + length);
    } else {
        console.log("I can only remember :");
    };
        for (var i = 0; i < characterArr.length; i++){
            console.log("There is " + characterArr.legnth);
            };
};



//code execution
console.log(strFun(strName2,strName));                                                 //String Function
console.log("Since " + strName2 + " became President of the Universe though, him and " + strName + " have not spoken much.");
arrFun( )
numCheck(console.log(strName + " asked the supercomputer while him and " + strName2 + " were standing there if it had finished the calculations yet?" + name));   //Boolean<---- is not displaying in console correctly!
timeCheck(5);                                                                    //Number Function
console.log("The supercomputer that had been biult, determined the meaning to Life, The Universe and Everything as 42");
addition(23);                                                                   //Procedure




