/**
 * Created by Jeremy Suika on March 20 2014
 *
 * Conditionals_Personal
 */


alert("I want to build a fire pit in the backyard. I need to see if I have enough money for the tools and the material to make the fire pit.");


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


alert("With inventorying the tools needed, your budget is now $"+limit+" for the remaining items.");



    console.log(mallet);
console.log(limit);