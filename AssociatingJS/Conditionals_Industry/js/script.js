/**
 * Created by Jeremy Suika on March 20 2014
 * Conditionals_Industry
 */


alert("You have a project due in 3 days, you are responsible to code 1000 lines of code for the project. ");


var day1= prompt("DAY ONE \nHow many lines of code did you do today?");

var day2= prompt("DAY TWO \nHow many lines of code did you do today?");

alert("You have one day left to code, you only have "+((1000)-(Number(day1)+Number(day2)))+ " lines of code left to do by tomorrow");

var help= prompt("If you feel you are behind, you can call on help from another team member. Because they busy with their own projects, anyone who assists you can only devote 200 lines each \n\n How many other team members you want to help you?")

var day3= prompt("DAY THREE \nHow many lines of code did you do today?");

var helpTotal= help *200;

var totalCodes= Number(day1)+Number(day2)+Number(day3)+Number(helpTotal);


if (totalCodes >= 1000){
    console.log("You coded over 1000 lines you completed your part of the project.")
}

console.log(totalCodes);

