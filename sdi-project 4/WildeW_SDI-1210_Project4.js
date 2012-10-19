/*
 *Woody Wilde
 *SDI-12010
 *Project 4
 *oct.13,2012
 *Function Library
 */


var myLibrary = function ( ) {


/******************STRING FUNCTIONS**************************************/
//Does a string follow a 123-456-7890 pattern like a phone number?  ----  <---WORKING DO NOT MESS WITH
    var chkPhone = function (testNumber) {
            
            var phoneNumber = testNumber;
            
                var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  //this shows the available characters for the numeric string
            
                    if (pattern.test(phoneNumber)) {    //testing to see if it is a phone number  PATTERN
                
                        var validPhoneNumber = phoneNumber.replace(pattern, "$1-$2-$3");    //VALIDATING IT IS IN FACT A PHONE NUMBER
                
                    return true;    // TRUE IF IT IS A PHONE NUMBER
                
                } else {
                    
                    return false;    //FALSE IF IT IS NOT A PHONE NUMBER
                    
            };
            
    };

//Does a string follow anaaa@bbb.ccc pattern like an email address?  ----  <---WORKING DO NOT MESS WITH
    var emailFun = function ( checkEmail ) {
        
        var emailAddress = checkEmail
        
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/// THESE ARE THE CHARACTERS AND STRING IT WILL LOOK FOR.
            
                if (emailPattern.test(emailAddress)) {              // TESTING checkEmail TO SEE IF IT MATCHES emailPattern.
            
                    return true;    //RETURNS TRUE IF IT IS A VALID EMAIL
                } else {
                    return false;   //RETURNS FALSE IF IT IS NOT A VALID EMAIL 
            };
             
    };
//Is the string a URL? (Does it start with http: or https:?)    ---- <---WORKING DO NOT MESS WITH!
    var isUrl = function checkUrl(testUrl) {
        var url = testUrl
        
            var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;    //THESE ARE THE AVBAILABLE CHARACTER FOR THE STRING 
    
                var urlString = re.test(url);    //CHECKING THE STRING TO SEE IF IT IS AN URL
                
            if (url.charAt(4) == "s") {       //THIS CHECKS THE FOURTH POSTION IN THE STRING FOR AN "S" TO SEE IF URL USES HTTPS:
                    
                    return true;              //IF THE URL STRING IS SECURED THIS WILL GIVE A TRUE OUTPUT
         } 
            
             if (url.charAt(4) == ":") {     //IF THE URL STRING DOES NOT CONTAIN AN "S" BUT HAS A ":" INSTEAD
            
                    return false;            //SHOULD RETURN A FALSE OUTPUT IF URL IS NORMAL AND NOT "HTTPS"
        }
}
//Title-case a string (split into words, then uppercase the first letter of each word)
    var titleCase = function fixCase(fixThis) {
        
        String.prototype.toProperCase = function () {           //CALLS PROTOTYPE STRING FUNCTION
 
        return this.replace(/\w\S*/g, function (txt) {          //TELLS WHICH LETTER(S) SHOULD BE UPPERCASE

            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();       //DEFINES WHAT CHARACTER SPACES SHOULD BE CHANGED

            });

        };

        return fixThis.toProperCase();          //RETURNS TITLECASE VARIABLE VALUE WITH FIRST LETTER OF ANY WORDS CAPITALIZED
    }

//Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" ? "a/b/c".
     var changeString = function changeSeparator(changeThis) {  //<--- WORKING DO NOT MESS WITH
            
            changeThis.replace(/\,/g,'/');                      //THIS TELLS WHAT CHARACTER TO REPLACE
            
                var newstring = changeThis.split(',').join('/');  //THIS TELLS WHERE TO REPLACE THE CHARACTER

                return newstring;          //RETURNS THE CHANGED STRING
    };



/***************************NUMBER FUNCTIONS*************************************************/

//Format a number to use a specific number of decimal places, as for money: 2.1 --> 2.10
var numberFormat = function formatNumber(number,decimal) {     //TAKES THE NUM ARGUMENT 
    
        var p = number.toFixed(decimal).split(".");          //TELLS WHERE TO PLACE THE "."
    
            return p[0].split("").reverse().reduce(function(acc, number, i, orig) {  //RETURNS THE STRING WITH DECIMAL PLACES
    
            return  number + (i && !(i % 3) ? "," : "") + acc;             //PLACES ","  FOR HUNDREDS,THOUSHANDS ECT.
    
        }, "") + "." + p[1];            //MODIFIES THE STRING SO THE OUTPUT IS 
}


//Given a string version of a number such as "42", return the value as an actual Number, such as 42.
var numberString = function(num){

    
                   Integer = num;
                   var i = Integer.parseInt(num.replaceAll("^\\D*?(-?\\d+).*$", "$1"));

            
/*
            if (num === int i = Integer.parseInt(num.replaceAll("\\D", ""))){
                //var notNumber = alert("Numbers Only Please!");
                return num;
            
                    } else {
*/               
            var number = "Your Number is : " + num;
            
                return number;  
        }
    




//returns for each function call
        return {
              //STRING FUNCTION RETURNS
              "chkPhone": chkPhone,
              "emailFun": emailFun,
              "isUrl":    isUrl,
              "changeString": changeString,
              "titleCase": titleCase,
              //NUMBER FUNCTION RETURNS
              "numberFormat": numberFormat,
              "numberString": numberString
              
            };
};
var myStuff = new myLibrary();
/*****************************STRING FUNCTION CALLS************************************************/
//PHONE NUMBER CHECK
console.log("Is this a phone number ? " + myStuff.chkPhone("317-490-7081"));   //SHOULD GIVE A TRUE OUPUT
console.log("Is this a phone number ? " + myStuff.chkPhone("Woody"));          //SHOULD GIVE A FALSE OUTPUT
//EMAIL CHECK
console.log("Is this a valid email address ? " + myStuff.emailFun("wawilde@fullsail.edu"));    //SHOULD GIVE A TRUE OUTPUT
console.log("Is this a valid email address ? " + myStuff.emailFun("123@458")); //SHOULD GIVE A FALSE OUTPUT
//URL CHECK
console.log("Is this a https url? " + myStuff.isUrl("https://fullsail.edu") ); //SHOULD GIVE A TRUE OUTPUT
console.log("Is this a https url ? " + myStuff.isUrl("http://www.google.com") );  //SHOULD GIVE A FALSE OUTPUT
//TITLE CASE CHANGE
console.log(myStuff.titleCase("the quick brown fox."));             //CHANGES THE FIRST LETTER OF EACH WORD TO A CAPITAL LETTER
//STRING CHANGE
console.log("This function just changed a,b,c, to : " + myStuff.changeString("a,b,c") );   //CHANGES THE "," TO A "/" DISPLAYS AS a/b/c
console.log("This function just changed 1,2,3, to : " + myStuff.changeString("1,2,3") );   //CHANGES THE "," TO A "." DISPLAYS AS 1.2.3

/***************************NUMBER FUNCTION CALLS**************************************************/

//NUMBER FORMAT FUNCTION CALL
console.log("This function can change any number to a 2 decimal format like the number 544.23423 would be : " + myStuff.numberFormat(544.23423,3)); // SHOULD DISPLAY NUMBER AS "544.23"
//NUMBER STRING FUNCTION CALL
console.log(myStuff.numberString("42"));













