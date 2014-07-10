/**
 * Created by Jeremy Suika on March 20 2014
 * Conditionals_Industry
 */


alert("You have a project due in 3 days, you are responsible to code 1000 lines of code for the project. ");    //This ALERT describes the If condition and explains the problem.


var day1= prompt("DAY ONE \nHow many lines of code did you do today?");                 //Prompt used to collect data of who much code you typed on day 1. To be added to on LINE 14, and LINE 22

var day2= prompt("DAY TWO \nHow many lines of code did you do today?");                  //Prompt used to collect data of who much code you typed on day2. To be added to on LINE 14, and LINE 22

alert("You have one day left to code, you only have "+((1000)-(Number(day1)+Number(day2)))+ " lines of code left to do by tomorrow");  //to show you your progress, added day 1 + day 2;

var help= prompt("If you feel you are behind, you can call on help from another team member. Because they busy with their own projects, anyone who assists you can only devote 200 lines each \n\n How many other team members you want to help you?")
                                                                                         // Because there is so much code, you might need help from a co-worker. This PROMPT asks how many people you want to help you. Its to be multiplied by 200 on line 20.
var day3= prompt("DAY THREE \nHow many lines of code did you do today?");                //Prompt used to collect data of who much code you typed on day 3. To be added to LINE 22 later

var helpTotal= help *200;                                                                   //this is how many people helped you X 200 lines of code each. EXAMPLE: 2 co-workers X 200 = 400 lines of code.

var totalCodes= Number(day1)+Number(day2)+Number(day3)+Number(helpTotal);                   // The total amount of code you have codded. Collected from the above prompts.


if (totalCodes >= 1000){                                                                    //If your total is 1000 or greater then the CONSOLE statement is TRUE, and will be displayed in the console.
    console.log("You coded the 1000 lines. You've completed your part of the project.");     //The message that you have done your job and coded the 1000 lines.
}


