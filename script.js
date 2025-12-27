function dicePlay() {
// dicee 1 to generate random face from 1-6
var ramdonNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomDiceImage = "dice" + ramdonNumber1 + ".png" ;
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
var player1 = image1.setAttribute("src", randomImageSource);
        
// dice 2 to generate random face from 1-6
var ramdonNumber2 = Math.floor(Math.random() * 6) + 1 ;
var randomDiceImage2 = "dice" + ramdonNumber2 + ".png" ;
var randomImageSource2 = "images/" + randomDiceImage2;
var image1 = document.querySelectorAll("img")[1];
var player2 = image1.setAttribute("src", randomImageSource2);

// conditions for winnner of game 
if(ramdonNumber1 > ramdonNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins.";
}else if(ramdonNumber1 === ramdonNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}

}

// refresh button 
document.querySelector("button").onclick = dicePlay ;
