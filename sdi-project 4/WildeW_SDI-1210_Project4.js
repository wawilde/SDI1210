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
                    
            }
            
    };

//Does a string follow anaaa@bbb.ccc pattern like an email address?  ----  <---WORKING DO NOT MESS WITH
    var emailFun = function ( checkEmail ) {
        
        var emailAddress = checkEmail
        
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/// THESE ARE THE CHARACTERS AND STRING IT WILL MARK AS TRUE.
            
                if (emailPattern.test(emailAddress)) {              // TESTING checkEmail TO SEE IF IT MATCHES emailPattern.
            
                    return true;    //RETURNS TRUE IF IT IS A VALID EMAIL
                } else {
                    return false;   //RETURNS FALSE IF IT IS NOT A VALID EMAIL 
            };
             
    };
//Is the string a URL? (Does it start with http: or https:?)
    var isUrl = function () {
    
    };
//Title-case a string (split into words, then uppercase the first letter of each word)

//Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" ? "a/b/c".
        
        return {
              "chkPhone": chkPhone,
              "emailFun": emailFun,
              ""
            };
};
var myStuff = new myLibrary();
/*****************************STRING FUNCTION CALLS**********************************/
//PHONE NUMBER CHECK
console.log("Is this a phone number ? " + myStuff.chkPhone("317-490-7081"));   //SHOULD GIVE A TRUE OUPUT
console.log("Is this a phone number ? " + myStuff.chkPhone("Woody"));          //SHOULD GIVE A FALSE OUTPUT
//EMAIL CHECK
console.log("Is this a valid email address ? " + myStuff.emailFun("wawilde@fullsail.edu"));    //SHOULD GIVE A TRUE OUTPUT
console.log("Is this a valid email address ? " + myStuff.emailFun("123@458")); //SHOULD GIVE A FALSE OUTPUT
//URL CHECK
console.log(isUrl());
