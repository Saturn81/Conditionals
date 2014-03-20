/**
 * Created by Jeremy Suika on March 20 2014
 *
 * Conditionals_Personal
 */


alert("I want to build a stone walled fire pit in the backyard. I need to see if I have enough money for the tools and the material to make the fire pit.");


var limit =300

var  mallet	= prompt("Do you have a mallet?","yes or no" );
var  tampler= prompt("Do you have a hand-tampler?","yes or no");
var shovel = prompt("Do you have a shovel?","yes or no");


if (mallet=="no") {
   var limit= 300- 16;
}else{
    var limit=300;
}

if (tampler=="no"){
    var limit2= limit-65;
}else{
    var limit2=limit;
}

if (shovel=="no"){
    var limit=limit2-30;
}else{
    var limit=limit2;
}

alert("With inventorying the essential tools needed, your have now $"+limit+" for the remaining building materials, like stone bricks and metal fire pit frame.");

limit2=limit-125

alert("The metal fire pit frame is $125.00, so that amount will subtracted from your remaining money to leave you with $"+(limit2)+".00 left in your budget for stone.");


var stoneFancy=128;

var stoneRegular=80;


var chose =prompt("You need 64 bricks for the fire pit. Fancy bricks are $2.00 a brick. Regular brick are 1.25 a brick. Chose fancy or regular:","fancy or regular");


if (chose=="fancy"){
    var limit= limit2- stoneFancy;
}else{
    var limit=limit2- stoneRegular;
}


if (limit>300){
    console.log("You are below your budget, you can start to build the fire pit. Good Luck!");
}else{
    console.log("You don't have enough money in the budget, borrow some tools or get cheaper stones.");
}





   // console.log(mallet);
console.log(limit);



//console.log("You are below your budget, you can start to build the fire pit. Good Luck!");

//console.log("You don't have enough money in the budget, borrow some tools or get cheaper stones.");
