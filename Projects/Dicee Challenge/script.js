let ranNum1 = Math.floor((Math.random()*6)+1);
let ranNum2 = Math.floor((Math.random()*6)+1);

let img1 = document.querySelector(".dice1 img").setAttribute('src',"images/dice"+ranNum1+".png");
let img2 = document.querySelector(".dice2 img").setAttribute('src',"images/dice"+ranNum2+".png");

if(ranNum1>ranNum2) {
    document.querySelector("h1").innerHTML = "Player1 Won"
} else if(ranNum1<ranNum2) {
    document.querySelector("h1").innerHTML = "Player2 Won"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}