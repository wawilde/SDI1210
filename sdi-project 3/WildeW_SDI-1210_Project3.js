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

//Calling JSON Data ---- WORKING DO NOT MESS WITH!
var getData = function (json){
    for ( var i = 0; i < jsonData.cast.length; i++){
      var getList = jsonData.cast[i];
      console.log("Introducing " + getList.name + " - " + getList.occupation + " from the ship " + getList.ship + " !");
    };
};

//Procedure ---- WORKING DO NOT MESS WITH!
var addition = function (num1){
    var sum = num1 + 19;
        if (sum >= 10) {
        console.log("The total of " + num1 + " plus 19 is : " + sum + " said Ford.");
    } else {
        console.log("When " + num1 + " is added to 19 it totals " + sum + " said Arthur.");
    
    };
};

//String Function ---- WORKING DO NOT MESS WITH!
var strFun = function(nam1,nam2){
    var bestFriends = " looked at each other in astonishment.";
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
	greeting = "Good " + timeOfDay + " , " + name + ", and now this weeks story!";
	return greeting;
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

//GETTER (ACCESSOR) FUNCTION

var cargoHold = function (item){
    
    var hold =  jsonData.cast.cargo;
       
        var cargoLoad = function (item) {
            if (item !== "HitchHikers") {
                hold.push(item);
            } else {
    
                if (hold === true){
                hold.push(item);
                return (hold )  
            } else {
           
                console.log("No HitchHikers!");
            };
        };
    };
};


//SETTER (MUTATOR) FUNCTION




//CODE EXECUTION
var getFullGreetingByName = getFullGreeting("Mr. Lewis");
console.log(getFullGreetingByName);

getData(jsonData);

console.log(strFun(strName2,strName));

timeCheck(5);

addition(23);
cargoHold.push("Cooking Staff", "HitchHikers"));
console.log("")
