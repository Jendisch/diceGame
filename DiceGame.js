"use strict";



/*Task: Dice Game. Design and write a game that uses at least one each of the 
		following dice, 4 sides, 6 sides, 8 sides, 10 sides, 12 sides, and 20 sides. 
		The rules and design are up to you , but the game must involve some sort 
		of user interaction, and the rules must be more complicated than war.
*/



			//Master Function = terribleTwos

function terribleTwos (){
	var playerName = introRules();
	var opponent = chooseOpponent(playerName);
	gameLoop(playerName, opponent);
}







function introRules (){
	var playerName = prompt("Please enter your name and begin Terrible Twos!");
	console.log("Welcome, " + playerName + "! Looking forward to introducing you to the rules of Terrible Twos.");
	pause(4000);						
	console.log("The rules are as follows:");
	console.log("You will soon be asked to roll a 6-sided die to determine what evil computer character you will be facing. After your opponent is determined, Terrible Twos will begin!");		
	pause(8000);
	console.log("The goal of the game is to reach 50 points before your opponent does. You will do this through a series of choices. Your choices are: Four, Eight, Ten, Twelve, or Twenty.");
	pause(8000);
	console.log("By choosing Four: you will roll two 4-sided dice. If either of the dice are a 2, no points will be added and your score will decrease by 2. If you roll doubles, your sum of dice will double and be added to your score (i.e. roll two 3's, their sum is 6, 6 is doubled and 12 points are added to your score). There is no penalty for double 2's other than score decreasing by 2. Otherwise, sum of dice will be added to your total score (i.e. roll a 1 and 4, 5 points are added to your score).");
	alert("Click OK " + playerName + ", when you've fully understand implications of choosing Four!");
	console.log("By choosing Eight: you will roll an 8-sided die. If you roll any 2s, no points will be added and your score will decrease by 4. Otherwise, the number on the die that you roll will be added to your total score (i.e. roll a 7, 7 points are added to your score).");			
	alert("Click OK " + playerName + ", when you've fully understand implications of choosing Eight!");			
	console.log("By choosing Ten:	you will roll a 10-sided die. If you roll any 2s, no points will be added and your score will decrease by 5. Otherwise, the number on the die that you roll will be added to your total score (i.e. roll a 9, 9 points are added to your score).");		
	alert("Click OK " + playerName + ", when you've fully understand implications of choosing Ten!");			
	console.log("By choosing Twelve: you will roll a 12-sided die. If you roll any 2s, no points will be added and your score will decrease by 5. Keep in mind, 12 has a 2 in it! If you roll either a 2 or a 12 your score will decrease by 5. Otherwise, the number on the die that you roll will be added to your total score (i.e. roll a 11, 11 points are added to your score).");			
	alert("Click OK " + playerName + ", when you've fully understand implications of choosing Twelve!");			
	console.log("By choosing Twenty: you will roll a 20-sided die. If you roll a 2, no points will be added and your score will decrease by 6, Keep in mind, 12 and 20 both have 2s in them! If you roll either a 2, 12 or 20 your score will decrease by 6. Otherwise, the number on the die that you roll will be added to your total score (i.e. roll a 16, 16 points are added to your score).");
	alert("Click OK " + playerName + ", when you've fully understand implications of choosing Twenty!");
	console.log("You and the computer will take turns making a choice, and you will be up first. If you happen to reach 50 first, your opponent is allowed one last chance.");
	pause(3000);						
	console.log("Looks like you're all ready to begin!");
	pause(3000);						
	return playerName;
}																


function chooseOpponent(playerName){
	alert(playerName + ", click OK to roll the die and choose your opponent!");
	pause(1000);
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
	console.log("Looks like your opponent is going to be " + opponent + "... yikes, what a tough one!");
	pause(2000);
	console.log("You and " + opponent + " will now face off in the game of Terrible Twos!!!");
	return opponent;
}


function gameLoop (playerName, opponent){
	var playerScore = 0;
	var opponentScore = 0;
	while (playerScore < 50 && opponentScore < 50) {
		playerScore = makeChoice(playerName, playerScore);
		opponentScore = makeOpponentChoice (playerName, opponent, opponentScore);
	}
	pause(1000);
	if(playerScore >= 50){
		console.log("Congratulations " + playerName + "! You won!!");
	}
	else if(opponentScore >= 50){
		console.log("Well " + playerName + "... You gave it your best shot! Unfortunately you couldn't out hustle " + opponent + " and he has defeated you.");
	}
}


function makeChoice (playerName, playerScore){
	var userChoice = "";
	userChoice = prompt(playerName + " it's your turn! Do you choose either Four, Eight, Ten, Twelve, or Twenty?");
	if (userChoice.toLowerCase() === "four"){
		console.log("You chose Four.");
		pause(2000);
		playerScore = choseFour(playerName, playerScore);
		return playerScore;
	}
	else if (userChoice.toLowerCase() === "eight"){
		console.log("You chose Eight.");
		pause(2000);
		playerScore = choseEight(playerName, playerScore);
		return playerScore;
	}
	else if (userChoice.toLowerCase() === "ten"){
		console.log("You chose Ten.");
		pause(2000);
		playerScore = choseTen(playerName, playerScore);
		return playerScore;
	}	
	else if (userChoice.toLowerCase() === "twelve"){
		console.log("You chose Twelve.");
		pause(2000);
		playerScore = choseTwelve(playerName, playerScore);
		return playerScore;
	}	
	else if (userChoice.toLowerCase() === "twenty"){
		console.log("You chose Twenty.");
		pause(2000);
		playerScore = choseTwenty(playerName, playerScore);
		return playerScore;
	}
}


function makeOpponentChoice (playerName, opponent, opponentScore) {
	alert("Relax a bit " + playerName + ", it's " + opponent + "'s turn now. Let's see what he decided!");
	pause(1000);
	var opponentChoice = Math.random();
	if (opponentChoice <= 0.20) {
		opponentChoice = "Four";
		console.log(opponent + " has chosen Four.");
		pause(2000);
		opponentScore = opponentFour (opponent, opponentScore);
		return opponentScore;
	} 
	else if (opponentChoice <= 0.40) {
		opponentChoice = "Eight";
		console.log(opponent + " has chosen Eight.");
		pause(2000);
		opponentScore = opponentEight (opponent, opponentScore);
		return opponentScore;
	}
	else if (opponentChoice <= 0.60) {
		opponentChoice = "Ten";
		console.log(opponent + " has chosen Ten.");
		pause(2000);
		opponentScore = opponentTen (opponent, opponentScore);
		return opponentScore;
	}
	else if (opponentChoice <= 0.80) {
		opponentChoice = "Twelve";
		console.log(opponent + " has chosen Twelve.");
		pause(2000);
		opponentScore = opponentTwelve (opponent, opponentScore);
		return opponentScore;
	}
	else {
		opponentChoice = "Twenty";
		console.log(opponent + " has chosen Twenty.");
		pause(2000);
		opponentScore = opponentTwenty (opponent, opponentScore);
		return opponentScore;
	}
}
						
												
function choseFour (playerName, playerScore){
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
	console.log("You rolled a " + fourDie1 + " and a " + fourDie2 + ". You just earned " + fourScore + " points.");	
	playerScore += fourScore;
	pause(1000);
	console.log("Your total score is currently " + playerScore + " points.");
	return playerScore;
}									
												
			
function choseEight (playerName, playerScore){
	var eightDie = Math.floor(Math.random() * 8 + 1);
	var eightScore = 0;
		if(eightDie === 2){
	        eightScore = (-4);
		} 
		else {
			eightScore = eightDie;  
		}
	console.log("You rolled a " + eightDie + ". You just earned " + eightScore + " points.");	
	playerScore += eightScore;
	pause(1000);
	console.log("Your total score is currently " + playerScore + " points.");
	return playerScore;
}									
													

function choseTen (playerName, playerScore){
	var tenDie = Math.floor(Math.random() * 10 + 1);
	var tenScore = 0;
		if(tenDie === 2){
	        tenScore = (-5);
		} 
		else {
			tenScore = tenDie;  
		}
	console.log("You rolled a " + tenDie + ". You just earned " + tenScore + " points.");	
	playerScore += tenScore;
	pause(1000);
	console.log("Your total score is currently " + playerScore + " points.");
	return playerScore;
}									
												

function choseTwelve (playerName, playerScore){
	var twelveDie = Math.floor(Math.random() * 12 + 1);
	var twelveScore = 0;
		if(twelveDie === 2 || twelveDie === 12){
	        twelveScore = (-5);
		} 
		else {
			twelveScore = twelveDie;  
		}
	console.log("You rolled a " + twelveDie + ". You just earned " + twelveScore + " points.");	
	playerScore += twelveScore;
	pause(1000);
	console.log("Your total score is currently " + playerScore + " points.");
	return playerScore;
}									

														
function choseTwenty (playerName, playerScore){
	var twentyDie = Math.floor(Math.random() * 20 + 1);
	var twentyScore = 0;
		if(twentyDie === 2 || twentyDie === 12 || twentyDie === 20){
	        twentyScore = (-6);
		} 
		else {
			twentyScore = twentyDie;  
		}
	console.log("You rolled a " + twentyDie + ". You just earned " + twentyScore + " points.");	
	playerScore += twentyScore;
	pause(1000);
	console.log("Your total score is currently " + playerScore + " points.");
	return playerScore;
}									


function opponentFour (opponent, opponentScore){
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
	console.log(opponent + " rolled a " + fourDie1 + " and a " + fourDie2 + ". He just earned " + fourScore + " points.");	
	opponentScore += fourScore;
	pause(1000);
	console.log(opponent + "'s total score is currently " + opponentScore + " points.");
	return opponentScore;
}


function opponentEight (opponent, opponentScore){
	var eightDie = Math.floor(Math.random() * 8 + 1);
	var eightScore = 0;
		if(eightDie === 2){
	        eightScore = (-4);
		} 
		else {
			eightScore = eightDie;  
		}
	console.log(opponent + " rolled a " + eightDie + ". He just earned " + eightScore + " points.");	
	opponentScore += eightScore;
	pause(1000);
	console.log(opponent + "'s total score is currently " + opponentScore + " points.");
	return opponentScore;
}	


function opponentTen (opponent, opponentScore){
	var tenDie = Math.floor(Math.random() * 10 + 1);
	var tenScore = 0;
		if(tenDie === 2){
	        tenScore = (-5);
		} 
		else {
			tenScore = tenDie;  
		}
	console.log(opponent + " rolled a " + tenDie + ". He just earned " + tenScore + " points.");	
	opponentScore += tenScore;
	pause(1000);
	console.log(opponent + "'s total score is currently " + opponentScore + " points.");
	return opponentScore;
}

													
function opponentTwelve (opponent, opponentScore){
	var twelveDie = Math.floor(Math.random() * 12 + 1);
	var twelveScore = 0;
		if(twelveDie === 2 || twelveDie === 12){
	        twelveScore = (-5);
		} 
		else {
			twelveScore = twelveDie;  
		}
	console.log(opponent + " rolled a " + twelveDie + ". He just earned " + twelveScore + " points.");	
	opponentScore += twelveScore;
	pause(1000);
	console.log(opponent + "'s total score is currently " + opponentScore + " points.");
	return opponentScore;
}														
													
													
function opponentTwenty (opponent, opponentScore){
	var twentyDie = Math.floor(Math.random() * 20 + 1);
	var twentyScore = 0;
		if(twentyDie === 2 || twentyDie === 12 || twentyDie === 20){
	        twentyScore = (-6);
		} 
		else {
			twentyScore = twentyDie;  
		}
	console.log(opponent + " rolled a " + twentyDie + ". He just earned " + twentyScore + " points.");
	opponentScore += twentyScore;
	pause(1000);
	console.log(opponent + "'s total score is currently " + opponentScore + " points.");
	return opponentScore;
}													
													
function pause(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}											
													
													
													
													
													
													
													
													
													
													
													
													
													
													
													
													
													
													
			
			
			
			
			
			
			
			