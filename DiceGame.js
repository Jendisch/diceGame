"use strict";



/*Task: Dice Game. Design and write a game that uses at least one each of the 
		following dice, 4 sides, 6 sides, 8 sides, 10 sides, 12 sides, and 20 sides. 
		The rules and design are up to you , but the game must involve some sort 
		of user interaction, and the rules must be more complicated than war.
*/



function introPlayer (){
	var playerName = document.getElementById("userInput").value;
	document.getElementById("playerName").innerHTML = playerName;
	document.getElementById("intro1").innerHTML = "Welcome, " + playerName + "! Looking forward to introducing you to the rules of Terrible Twos. Click the button below on the left to read a list of the game rules. <br>";
	return playerName;
}

function introRules(playerName){							
	document.getElementById("introRules1").innerHTML = "<h3><u>The rules are as follows:</u></h3> You will soon be asked to roll a 6-sided die to determine what evil computer character you will be facing. After your opponent is determined, Terrible Twos will begin! <br> The goal of the game is to reach 100 points before your opponent does. You will do this through a series of choices. Your choices are: Four, Eight, Ten, Twelve, or Twenty.<ul> <li><b>By choosing Four</b>: you will roll two 4-sided dice. If either of the dice are a 2, no points will be added and your score will decrease by 2. If you roll doubles, your sum of dice will double and be added to your score (i.e. roll two 3's, their sum is 6, 6 is doubled and 12 points are added to your score). There is no penalty for double 2's other than score decreasing by 2. Otherwise, sum of dice will be added to your total score (i.e. roll a 1 and 4, 5 points are added to your score).</li> <li> <b>By choosing Eight</b>: you will roll an 8-sided die. If you roll any 2s, no points will be added and your score will decrease by 4. Otherwise, the number on the die that you roll will be added to your total score (i.e. roll a 7, 7 points are added to your score).</li> <li> <b>By choosing Ten</b>:	you will roll a 10-sided die. If you roll any 2s, no points will be added and your score will decrease by 5. Otherwise, the number on the die that you roll will be added to your total score (i.e. roll a 9, 9 points are added to your score).</li> <li><b>By choosing Twelve</b>: you will roll a 12-sided die. If you roll any 2s, no points will be added and your score will decrease by 6. Keep in mind, 12 has a 2 in it! If you roll either a 2 or a 12 your score will decrease by 6. Otherwise, the number on the die that you roll will be added to your total score (i.e. roll a 11, 11 points are added to your score).</li> <li><b>By choosing Twenty</b>: you will roll a 20-sided die. If you roll a 2, no points will be added and your score will decrease by 8, Keep in mind, 12 and 20 both have 2s in them! If you roll either a 2, 12 or 20 your score will decrease by 8. Otherwise, the number on the die that you roll will be added to your total score (i.e. roll a 16, 16 points are added to your score).</li> </ul> You and the computer will take turns making a choice, and you will be up first. If you happen to reach 100 first, your opponent is allowed one last chance.";						
	document.getElementById("introRules2").innerHTML = "I hope you're all ready to get started! <b>Click the 'Choose your opponent' button above on the right.</b>";												
	return playerName;
}																

function chooseOpponent(playerName){
	var opponent = Math.random();
		if (opponent <= 0.16) {
			opponent = "Darth Vader";
		} 
		else if (opponent <= 0.33) {
			opponent = "Agent Smith";
		}
		else if (opponent < 0.50) {
			opponent = "Mark Zuckerberg";
		}
		else if (opponent <= 0.66) {
			opponent = "Dr. Evil";
		}
		else if (opponent <= 0.83) {
			opponent = "Skynet";
		}
		else {
			opponent = "Mugatu";
		}
	document.getElementById("listOpponent").innerHTML = ("Looks like your opponent is going to be " + opponent + "... yikes, what a tough one!");
	document.getElementById("opponentName").innerHTML = opponent;	
	return opponent;
}


var playerScore = 0;
var opponentScore = 0;


if(playerScore >= 50){
		document.write("Congratulations! You won!! Go brag to all of your friends.");
	}
else if(opponentScore >= 50){
		document.write("Well... You gave it your best shot! <br> BUT, YOU LOST! <br> Better luck next time chump.");
	}

	
function choseFour (){
	var fourDie1 = Math.floor(Math.random() * 4 + 1);
	var fourDie2 = Math.floor(Math.random() * 4 + 1);
	var fourScore = 0;
		if(fourDie1 === 2 || fourDie2 === 2){
	        fourScore = (-2);
		}
		else if (fourDie1 === fourDie2){
			fourScore = (fourDie1 + fourDie2) * 2;
		}  
		else {
			fourScore = fourDie1 + fourDie2;  
		}
	playerScore += fourScore;
	document.getElementById("listPlayer").innerHTML = ("You rolled a " + fourDie1 + " and a " + fourDie2 + " and earned " + fourScore + " point(s) to your total.");
	updatePlayerScore(playerScore);
	
	opponentTurn(opponentScore);
}


function choseEight (){
	var eightDie = Math.floor(Math.random() * 8 + 1);
	var eightScore = 0;
		if(eightDie === 2){
	        eightScore = (-4);
		} 
		else {
			eightScore = eightDie;  
		}
	playerScore += eightScore;
	document.getElementById("listPlayer").innerHTML = ("You rolled an " + eightDie + " and earned " + eightScore + " point(s) to your total.");
	updatePlayerScore(playerScore);
	
	opponentTurn(opponentScore);
}	


function choseTen (){
	var tenDie = Math.floor(Math.random() * 10 + 1);
	var tenScore = 0;
		if(tenDie === 2){
	        tenScore = (-5);
		} 
		else {
			tenScore = tenDie;  
		}
	playerScore += tenScore;
	document.getElementById("listPlayer").innerHTML = ("You rolled an " + tenDie + " and earned " + tenScore + " point(s) to your total.");
	updatePlayerScore(playerScore);
	
	opponentTurn(opponentScore);
}	


function choseTwelve (){
	var twelveDie = Math.floor(Math.random() * 12 + 1);
	var twelveScore = 0;
		if(twelveDie === 2 || twelveDie === 12){
	        twelveScore = (-6);
		} 
		else {
			twelveScore = twelveDie;  
		}
	playerScore += twelveScore;
	document.getElementById("listPlayer").innerHTML = ("You rolled an " + twelveDie + " and earned " + twelveScore + " point(s) to your total.");
	updatePlayerScore(playerScore);
	
	opponentTurn(opponentScore);
}	


function choseTwenty (){
	var twentyDie = Math.floor(Math.random() * 20 + 1);
	var twentyScore = 0;
		if(twentyDie === 2 || twentyDie === 12 || twentyDie === 20){
	        twentyScore = (-8);
		} 
		else {
			twentyScore = twentyDie;  
		}
	playerScore += twentyScore;
	document.getElementById("listPlayer").innerHTML = ("You rolled an " + twentyDie + " and earned " + twentyScore + " point(s) to your total.");
	updatePlayerScore(playerScore);
	
	opponentTurn(opponentScore);
}	


function opponentTurn(){
	var opponentChoice = Math.random();
		if (opponentChoice <= 0.20) {
			opponentFour(opponentScore);
			return opponentScore;
		} 
		else if (opponentChoice <= 0.40) {
			opponentEight(opponentScore);
			return opponentScore;
		}
		else if (opponentChoice <= 0.60) {
			opponentTen(opponentScore);
			return opponentScore;
		}
		else if (opponentChoice <= 0.80) {
			opponentTwelve(opponentScore);
			return opponentScore;
		}
		else {
			opponentTwenty(opponentScore);
			return opponentScore;
		}	
}


function updatePlayerScore(playerScore){
	document.getElementById("playerScore").innerHTML = playerScore;
	return playerScore;
}


function updateOpponentScore(opponentScore){
	document.getElementById("opponentScore").innerHTML = opponentScore;
	return opponentScore;
}


function opponentFour (){
	var fourDie1 = Math.floor(Math.random() * 4 + 1);
	var fourDie2 = Math.floor(Math.random() * 4 + 1);
	var fourScore = 0;
		if(fourDie1 === 2 || fourDie2 === 2){
	        fourScore = (-2);
		}
		else if (fourDie1 === fourDie2){
			fourScore = (fourDie1 + fourDie2) * 2;
		}  
		else {
			fourScore = fourDie1 + fourDie2;  
		}	
	opponentScore += fourScore;
	document.getElementById("listOpponent").innerHTML = ("Your opponent chose Four and rolled a " + fourDie1 + " and a " + fourDie2 + ". He just earned " + fourScore + " point(s) added to his total.");
	updateOpponentScore(opponentScore);
	return opponentScore;
}


function opponentEight (){
	var eightDie = Math.floor(Math.random() * 8 + 1);
	var eightScore = 0;
		if(eightDie === 2){
	        eightScore = (-4);
		} 
		else {
			eightScore = eightDie;  
		}
	opponentScore += eightScore;
	document.getElementById("listOpponent").innerHTML = ("Your opponent chose Eight and rolled a " + eightDie + ". He just earned " + eightScore + " point(s) added to his total.");
	updateOpponentScore(opponentScore);
	return opponentScore;
}	


function opponentTen (){
	var tenDie = Math.floor(Math.random() * 10 + 1);
	var tenScore = 0;
		if(tenDie === 2){
	        tenScore = (-5);
		} 
		else {
			tenScore = tenDie;  
		}
	opponentScore += tenScore;
	document.getElementById("listOpponent").innerHTML = ("Your opponent chose Ten and rolled a " + tenDie + ". He just earned " + tenScore + " point(s) added to his total.");
	updateOpponentScore(opponentScore);
	return opponentScore;
}

													
function opponentTwelve (){
	var twelveDie = Math.floor(Math.random() * 12 + 1);
	var twelveScore = 0;
		if(twelveDie === 2 || twelveDie === 12){
	        twelveScore = (-6);
		} 
		else {
			twelveScore = twelveDie;  
		}
	opponentScore += twelveScore;
	document.getElementById("listOpponent").innerHTML = ("Your opponent chose Twelve and rolled a " + twelveDie + ". He just earned " + twelveScore + " point(s) added to his total.");
	updateOpponentScore(opponentScore);
	return opponentScore;
}														
													
													
function opponentTwenty (){
	var twentyDie = Math.floor(Math.random() * 20 + 1);
	var twentyScore = 0;
		if(twentyDie === 2 || twentyDie === 12 || twentyDie === 20){
	        twentyScore = (-8);
		} 
		else {
			twentyScore = twentyDie;  
		}
	opponentScore += twentyScore;
	document.getElementById("listOpponent").innerHTML = ("Your opponent chose Twenty and rolled a " + twentyDie + ". He just earned " + twentyScore + " point(s) added to his total.");
	updateOpponentScore(opponentScore);
	return opponentScore;
}											
													
													
													
													
													
													
			
			
			
			
			
			
			
			