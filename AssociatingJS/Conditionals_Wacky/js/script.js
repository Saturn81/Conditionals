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
    var battle1= amountFirstWave-10000; ("The enemy has attacked your " + firstWave + " legions(s). Destroying all your men. You did not reach the city wall.");
}











//console.log(amountFirstWave);

console.log("After the first wave of your attack, you have " +battle1+ " troops left in your legions sent out.");          //this is used to test expressions in the console.





////alert("They enemy has attacked your " + firstWave + " legion(s). They killed 30,000 of your men. But you reached the city wall!");

///alert("The enemy has attacked your " + firstWave + " legions(s). Destroying all your men. You did not reach the city wall.");