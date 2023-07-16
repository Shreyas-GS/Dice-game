var randomNumber1=Math.random();
randomNumber1=(randomNumber1*6)+1;
randomNumber1=Math.floor(randomNumber1);
randomDice1 = "dice" + randomNumber1 + ".png";
randomImageSrc1 = "images/" + randomDice1;


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);
randomDice2 = "dice" + randomNumber2 + ".png";
randomImageSrc2 = "images/" + randomDice2;

document.querySelector(".img1").setAttribute("src",randomImageSrc1);
document.querySelector(".img2").setAttribute("src", randomImageSrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 wins!"
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").textContent = "🚩Its a tie🚩!";
}
else{
    document.querySelector("h1").textContent = "Player 2 wins!🚩";
}