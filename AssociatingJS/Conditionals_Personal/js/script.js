/**
 * Created by Jeremy Suika on March 20 2014
 *
 * Conditionals_Personal
 */


alert("I want to build a stone walled fire pit in the backyard. I need to see if I have enough money for the tools and then material to make the fire pit.");
                 //this alert describes the formula and what conditions I am trying to express.

var limit =300    //This will be the total amount of money allowed to build the fire pit.

var  mallet	= prompt("Do you have a mallet?","yes or no" );             //prompt to see if I own the proper tools. a yes or no answer is required.
var  tampler= prompt("Do you have a hand-tampler?","yes or no");         //prompt to see if I own the proper tools. a yes or no answer is required.
var shovel = prompt("Do you have a shovel?","yes or no");                //prompt to see if I own the proper tools. a yes or no answer is required.


if (mallet=="no") {                        //If the statement is TRUE and you input NO in the PROMPT above, then $16 is subtracted from $300. In this example VAR LIMIT is either 300 being false, or 284 being true.
   var limit= 300- 16;
}else{
    var limit=300;             //If you don't have the tool, a number gets subtracted from the total labeled either limit or limit2.
}

if (tampler=="no"){             //This is the same as the above IF/ELSE statment but now this YES OR NO prompt gets subtracted from a new limit or limit2 total.
    var limit2= limit-65;
}else{
    var limit2=limit;
}

if (shovel=="no"){                  //If you don't have the tool, a number gets subtracted from the total labeled either limit or limit2.
    var limit=limit2-30;
}else{
    var limit=limit2;               //This is the same as the above IF/ELSE statment but now this YES OR NO prompt gets subtracted from a new limit or limit2 total.

}

                //The above IF/ELSE are to see exactly how much money you have if you have to buy these tools. All the numbers are subtracted as you go to the prompts.

alert("With inventorying the essential tools needed, your have now $"+limit+" for the remaining building materials, like stone bricks and metal fire pit frame.");   //tells you how much you have spent on the tools, if you DID spend money.

limit2=limit-125  ///the 125 represents the cost of the metal fire pit frame. its subtracted from whats left of your budget.

alert("The metal fire pit frame is $125.00, so that amount will subtracted from your remaining money to leave you with $"+(limit2)+".00 left in your budget for stone.");  //alert to describe that a metal fire pit frame is subtracted from your total.


var stoneFancy=128;   //variable to see the total cost of fancy stone bricks.

var stoneRegular=80; //variable to see the total cost of regular stone bricks.


var stonePick =prompt("You need 64 bricks for the fire pit. Fancy bricks are $2.00 a brick. Regular brick are 1.25 a brick. Chose fancy or regular:","fancy or regular");  //Prompt and varriable to see if you chose the exprensive or the regular bricks.



if (stonePick=="fancy"){                                    //if statement is TRUE, then you pick fancy bricks and $128 gets subtracted from your remaining budget.
    var limit= limit2 - stoneFancy;
}else{
    var limit= limit2 - stoneRegular;                     //if statement is FALSE, then regular stone which is $80 gets subtracted from your total.
}

var friend =(prompt("Do you have a neighbor that has all the tools you need? (shovel, hand tampler, mallet)","yes or no"));


if (limit > 0){
    console.log("You are below your budget, you can start to build the fire pit. Good Luck!");                     //If you spent over 0 (0 is out of money) then the console.log prompt comes up you are at your budget
}else if(friend=="yes"){
    console.log("You are below your budget,because of a neighbors help, you can start to build the fire pit. Good Luck!");
}else{
    console.log("You don't have enough money in the budget, borrow some tools or get cheaper stones.");             //If you spent under o (like -20, or an negative number, t hen the console displays the message that you went over your limit.
}





//We have been subtracting amounts from our original 300 budget. So if I did not have a shovel  it would be 300-30 leaving me 270. As I subtract, the numbers decrease from 300.
// .....If that total number gets in the Negatives like -20, then we went over the budget and the condition is FALSE.






