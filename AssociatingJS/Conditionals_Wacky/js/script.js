/**
 * Created by Jeremy Suika on 3/19/14.
 * Conditionals_Wacky
 */


alert("You are taking back your 9 kingdoms. This battle is with swords, and dragons, and is fantasy and very copyrighted by other people. So names have been changed. \n\nYou command the troops and decide how many soldiers fight at a given time.");


alert("You approach the major city in Easterous. Your going to attack it. you have at your command: \n5 legions (each legion is 10,000 men)\n2 dragons, (powerful monsters)");

var firstWave= prompt("FIRST WAVE OF ATTACK: \nHow many legions do you send out against the city's defence? (1-5)");

var amountFirstWave= firstWave *10000;



if (amountFirstWave > 30000){
    var battle1= amountFirstWave-30000; alert("They enemy has attacked your " + firstWave + " legion(s). They killed 30,000 of your men. But you reached the city wall!");
}else{
    var battle1= amountFirstWave-amountFirstWave; alert("The enemy has attacked your " + firstWave + " legions(s). Destroying all your men. You did not reach the city wall.");
}





var yourDragons = 3;
var dragonDefense= prompt("The first wave of attack is over. The enemy seeing an opportunity and sends out their own 2 dragons against you. \nHow many of your 3 dragons do you send out to battle their dragons? (1-3)");




var finalDragons = yourDragons-dragonDefense;



if (dragonDefense == 3){
    alert("You send out all your dragons, that was a brash and reckless move. All 3 of your dragons were destroyed.");

}
if (dragonDefense== 2){
    alert("Your 2 dragons fought hard and destroyed the enemy's dragons, but they were destroyed as well.")
}
if (dragonDefense==1){
    alert("Your single dragon fought and killed the enemy's two dragons, it was a powerfull fight, but your brave dragon did not make it")
}



if  (finalDragons >= 1 && battle1 >= 10000){
    console.log("Since you still have a large force of legions and have "+finalDragons+ " dragon(s) remaining, you are strong enough to storm the city gates. VICTORY IS YOURS");
}else{
    console.log("You lack legions or dragons, the enemy can overpower any future attacks, YOU HAVE LOST.");
}






alert("The final battle is over, dragons and man fought hard, the results in the Console. ");









//console.log("After the first wave of your attack, you have " +battle1+ " troops left in your legions sent out.");          //this is used to test expressions in the console.


