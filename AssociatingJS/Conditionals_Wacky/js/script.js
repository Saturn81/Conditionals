/**
 * Created by Jeremy Suika on 3/19/14.
 * Conditionals_Wacky
 */


alert("You are taking back your 9 kingdoms. This battle is with swords, and dragons, and is fantasy and very copyrighted by other people. So names have been changed. \n\nYou command the troops and decide how many soldiers fight at a given time.");


alert("You approach the major city in Easterous. Your going to attack it. you have at your command: \n5 legions (each legion is 10,000 men)\n2 dragons, (powerful monsters)\n2 squads of archers  (each squad is 2,000 men)");

var firstWave= prompt("FIRST WAVE OF ATTACK: \nHow many legions do you send out against the city's defence? (1-5)");

var amountFirstWave= firstWave *10000;



if (amountFirstWave > 30000){
    var battle1= amountFirstWave-30000; alert("They enemy has attacked your " + firstWave + " legion(s). They killed 30,000 of your men. But you reached the city wall!");
}else{
    var battle1= amountFirstWave-10000; alert("The enemy has attacked your " + firstWave + " legions(s). Destroying all your men. You did not reach the city wall.");
}


var dragonDefense= prompt("The first wave of attack is over. The enemy seeing an opportunity and sends out their own 2 dragons to your remaining army. \nHow many of your 2 dragons do you send out to battle their dragons? (1-2) ")

if (dragonDefense == 2){
    alert("The dragon battle was epic, all your dragons you sent out died in combat,as well as the enemy's dragons. You have no dragons left in your army.");

}else{
    alert("The dragon battle was epic, all your dragons you sent out died in combat, leaving you with the 1 dragon left to attack the enemy with.")
}






console.log(dragonDefense);

console.log("After the first wave of your attack, you have " +battle1+ " troops left in your legions sent out.");          //this is used to test expressions in the console.


