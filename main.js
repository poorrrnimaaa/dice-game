function play() {
  //player 1
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage1 = "dice" + randomNumber1 + ".png";
  let image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", "images/" + randomDiceImage1);
  //player 2
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage2 = "dice" + randomNumber2 + ".png";
  let image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", "images/" + randomDiceImage2);
  //winner
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WON !!!"
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WON !!!";
  } else {
    document.querySelector("h1").innerHTML = "IT'S A DRAW !!!";
  }
}
