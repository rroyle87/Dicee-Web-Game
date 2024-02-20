let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage1;
console.log(randomImageSource);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;
console.log(randomImageSource);

var randomImageSource2 = "images/" + randomDiceImage2;
console.log(randomImageSource);

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

document.querySelector("h1").innerHTML =
  randomNumber1 > randomNumber2
    ? "Player 1 Wins!"
    : randomNumber1 < randomNumber2
    ? "Player 2 Wins!"
    : "Tie!";
