/*
 *Woody Wilde
 *SDI-12010
 *Project 4
 *oct.13,2012
 *Function Library
 */


var myLibrary = function ( ) {


/******************STRING FUNCTIONS**************************************/
//Does a string follow a 123-456-7890 pattern like a phone number?
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

/*Does a string follow anaaa@bbb.ccc pattern like an email address?
    var emailFun = function ( val ) {
        
    
    };*/
//Is the string a URL? (Does it start with http: or https:?)
    var isUrl = function () {
    
    };
//Title-case a string (split into words, then uppercase the first letter of each word)

//Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" ? "a/b/c".
        
        return {
              "chkPhone": chkPhone,
              
            };
};
var myStuff = new myLibrary();
/*****************************STRING FUNCTION CALLS**********************************/
console.log("Is this a phone number ? " + myStuff.chkPhone("Woody"));          //SHOULD GIVE A FALSE OUTPUT
console.log("Is this a phone number ? " + myStuff.chkPhone("317-490-7081"));   //SHOULD GIVE A TRUE OUPUT
//console.log(emailFun());
//console.log(isUrl());
