/**
 * Created by Jeremy Suika on 3/19/14.
 * Conditionals_Wacky
 */


alert("You are taking back your 9 kingdoms. This battle is with swords, and dragons, and is fantasy and very copyrighted by other people. So names have been changed. \n\nYou command the troops and decide how many soldiers fight at a given time.");
               //This alert describes the conditions I am working on expressing.

alert("You approach the the city wall of Easterous. Your going to attack it. You have at your command: \n5 legions (each legion is 10,000 men)\n3 dragons, (powerful monsters)");   //Another ALERT, describing the situation. It list the amount of dragons and people the USER will have.

var firstWave= prompt("FIRST WAVE OF ATTACK: \nHow many legions do you send out against the city's defence? (1-5)");   //the number expressed here in the PROMPT, will be the amount of solgiers who battle in the formula.

var amountFirstWave= firstWave *10000;           //this variable is to calculate the what the number of legions is in 10,000s. EXAMPLE 1 legion = 10,000, 2 legions =20,000 men, 5 legions = 50,000 men.



if (amountFirstWave > 30000){      //conditinal operater used    //If the amount of legions (men fighting) you pick for the first wave is greater then 30,000 then the statement is true.
    var battle1= amountFirstWave-30000; alert("They enemy has attacked your " + firstWave + " legion(s). They killed 30,000 of your men. But you breached the city wall! First Wave a success!");  //When statement is true, Alert describes the battle, and VARIABLE "battle1" will equal your remaining men subtracted from 50,000 (to be used later, LINE 52)
}else{
    var battle1= (amountFirstWave-amountFirstWave); alert("The enemy has attacked your " + firstWave + " legions(s). Destroying all your men. You did not breach the city wall.");
}
                //If statement is FALSE, then the ALERT comes up, describing that you did not have enough legions to fight causing you not to advance.
                // VARIABLE "Battle 1", becomes 0 to signify the lack of advancement or continuing in the battle, since you did not beat them, you cannot WIN, it is stated on line 52




var yourDragons = 3;                     //used to indicate exactly how many dragons you start out with.
var dragonDefense= prompt("The first wave of attack is over. The enemy seeing an opportunity and sends out their own 2 dragons against you. \nHow many of your 3 dragons do you send out to battle their dragons? (1-3)");
                                        // this PROMPT used to state exactly how many dragons you will send out into battle against the enemy.



var finalDragons = yourDragons-dragonDefense;      //this variable is expressing the outcome of the fight between the dragons. It represents how many dragons you have left after the fight, as whatever amount of dragons you send in, they all die.



if (dragonDefense == 3){            //Equality operators used, to describe what happens when your select 3 dragons on the PROMPT,"How many dragons do you send in."
    alert("You send out all your dragons?! That was a brash and reckless move. All 3 of your dragons were destroyed.");

}
if (dragonDefense== 2){               //Equality operators used, to describe what happens when your select 2 dragons on the PROMPT,"How many dragons do you send in."
    alert("Your 2 dragons fought hard and destroyed the enemy's dragons, but they were destroyed as well.")
}
if (dragonDefense==1){                //Equality operators used, to describe what happens when your select 1 dragons on the PROMPT,"How many dragons do you send in."
    alert("Your single dragon fought and killed the enemy's two dragons, it was a powerfull fight, but your brave dragon did not make it.")
}
            //      In the IF statements above, only one will be true so, the other ALERTS will not show up, THERE CAN BE ONLY ONE!!



(finalDragons >= 1 && battle1 >= 10000) ? console.log("Since you still have a large force of legions and have "+finalDragons+ " dragon(s) remaining, you are strong enough to storm the city gates. VICTORY IS YOURS") : console.log("You lack legions or dragons, the enemy can overpower any future attacks, YOU HAVE LOST.");
// ternary conditional
//If you still have any dragons left AND you used either 4-5 legions in the FIRST WAVE PROMPT (or over 10,000 men left in total) your statement is TRUE.  If any part of the two are FALSE, the whole statement is FALSE and the "ELSE" comes into factor.
//If you don't have at least one dragon, and your legion numbers are below 10,000 then the statement is false and the ELSE console log statement comes up. It also explains the final outcome of the war.



alert("The final battle is over, dragons and man fought hard, the results in the Console. ");  //Telling you to go to the Console to see the result.










