//alert("You hav not worked on this yet!");
/*
 * Woody Wilde
 * SDI-1210
 * Project 3
 * October 6, 2012
 */

// declare global variables
var strName = "Zaphod Beeblebrox";
var numAge = 10;
var magicNum = 42;
var strName2 = "Ford Prefect";
var characterArr = ["Trillian", "Arthur Dent", "Marvin 'the depressed android'"];

//Procedure ---- WORKING DO NOT MESS WITH!
var addition = function (num1){
    var sum = num1 + 19;
        if (sum >= 10) {
        console.log("The total of " + num1 + " plus 19 is : " + sum);
    } else {
        console.log("When " + num1 + " is added to 19 it totals " + sum + ".");
    
    };
};

//String Function ---- WORKING DO NOT MESS WITH!
var strFun = function(nam1,nam2){
    var bestFriends = " were best friends at one time.";
    bestFriends = nam1 + " and " +nam2 + bestFriends;

return bestFriends;

};

//GREETING Function ---- WORKING DO NOT MESS WITH! 

var getFullGreeting = function (name){
	var currentHour = (new Date()).getHours(),
	timeOfDay, greeting;
		if (currentHour < 12 ){timeOfDay = "Morning"; }
		else if (currentHour < 17 ){timeOfDay = "Afternoon"; }
		else {timeOfDay = "Evening"; }
	greeting = "Good " + timeOfDay + " , " + name + ", and now our story continues!";
	return greeting;
};


//CODE EXECUTION
var getFullGreetingByName = getFullGreeting("Mr. Lewis");
console.log(getFullGreetingByName);
addition(23);
console.log(strFun(strName2,strName));








