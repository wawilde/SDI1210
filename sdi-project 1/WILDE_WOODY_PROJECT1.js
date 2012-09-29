/*alert("JavaScript works!");
*
* Woody Wilde
* SDI 1210
* 09/26/12
* Project 1
*/

//declaring variables
var boyName = "Bobby";
var owlSays = "\"let's find out.\"";
var sucker = "Tootsie Roll TootsiePop";
var hasStick = true;
var numOfLicks = 3;

//variable output via console.log
console.log(boyName + "Ask's Mr. Owl, \"how many lick's does it take to get to the center of a tootsie roll tootsie pop?\"");
console.log("Mr. Owl says \"" + owlSays + "\"");
console.log("Mr. Owl begins licking the " + sucker + " and says, \" It should take about " + numOfLicks  + ".\"");
console.log(boyName + " asked Mr.owl if he still had the stick, and Mr. Owl said this was " + hasStick);


//code execution
if (boyName === "Bobby") {
        if(numOfLicks === 3){
        numOfLicks = numOfLicks + 1;
        console.log("The owl takes a bite on lick number " + numOfLicks + " and says 3");
    } else {
        console.log("Hey! You ate my sucker!");
    }
} else {
    if (hasStick === true ){
        consolelog.("Mr. Owl still has the sucker stick.");
    } else {
      console.log("Mr. Owl does not has the sucker stick");  
    };
    
};
console.log("Now all " + boyName + " will eat is a " + sucker + ".");
