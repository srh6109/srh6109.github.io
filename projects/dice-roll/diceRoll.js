//noprotect
//DO NOT REMOVE THIS ^^^^^^^

//declare starting points below
var start = 100; //starting number of points
var roll = 0;
var number = 1;
var firstRun = true;
var correctNum = 0;

function updateGuessNumber (){
    var guessGrab = document.getElementById('guessNumber');
    number = guessGrab.options[guessGrab.selectedIndex].value;
}
function wagerChanged(){
    bet = document.getElementsByName("wagerAmount")[0].value;
}
function wagerAmountSet (){
    if (wager < 0){
        alert("Wager A Negative Number. Nice try");
        alert("Heres a 100 for your ingenuity");
        start += 100;
        document.getElementById("balance").innerHTML = "<p id=\"balance\"> Current Balance: " + start + "</p>";
    } else {
        if (bet > start){
            alert("Wager Too High");
        }
        else {
            start = rollDice(start);
        }
    }
}

 //call functions in here 




//declare functions below



//rollDice -> rolls a 6 sided die
//winWager -> adds points won to total points
//loseWager -> removes points won from total points


//Roll a six sided die and guess the correct number rolled to win
//If won, add 6 times the bet amount back to total points
//If loss, subtract the bet amount from the total points


function rollDice(start){
  roll = Math.ceil(Math.random() * 6);
  start = wager(start, bet, number, roll);
  rewriteScreen(start);
  return start;
}

function wager(start, bet, num, correctNum){
  alert("The lucky number is " + correctNum + ". Your number is " + num + ".");
  if (num == correctNum){
  start = start + (bet*6);
  alert("You won! Now, you have a total of " + start + " points.");
  alert(start);
  return start;
  }
  else {
    start = start - bet;
    alert("You lost. Better luck next time. Now, you have a total of " + start + " points.");
    alert(start);
    rewriteScreen(start);
    return start;
  }
}

function rewriteScreen() {
    checkBalanceEmpty();
    alert(start + "yeah");
    if (firstRun === true){
        console.log("Running Set 1");
        var node = document.createTextNode("Dice Roll: " + correctNum + " Your Guess: " + number);
        document.getElementById("rollAndGuess").appendChild(node);
        document.getElementById("balance").innerHTML = "<p id=\"balance\"> Current Balance: " + start + "</p>";
        alert("hi");
        firstRun = false;
    } else if (firstRun === false){
        console.log("Running Set 2");
        document.getElementById("rollAndGuess").innerHTML = "<p id=\"rollAndGuess\"> \nYour Guess: " + number + "</p>";
        document.getElementById("balance").innerHTML = "<p id=\"balance\"> Current Balance: " + start + "</p>";
    } else {
        alert("Error");
    }
}

function checkBalanceEmpty(){
    if (start <= 0){
        document.write("<h2> Game Over </h2>");
        document.write("<h3> Refresh to Play Again </h3>");
    }
}