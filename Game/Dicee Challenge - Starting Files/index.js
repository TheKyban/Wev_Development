// Random dice image for dice 1
let RandomNum = Math.floor(Math.random() * 6) + 1;
let randomImage1 = "images/dice" + RandomNum + ".png";

document.querySelector('.img1').setAttribute('src', randomImage1)


// Random dice image for dice 2
let RandomNum2 = Math.floor(Math.random() * 6) + 1;
let randomImage2 = "images/dice" + RandomNum + ".png";

document.querySelector('.img2').setAttribute('src', randomImage2)

// deciding who are winning
if (RandomNum > RandomNum2) {
    document.querySelector("h1").innerHTML = "Player1 Won"
} else if (RandomNum === RandomNum2) {
    document.querySelector("h1").innerHTML = "Draw"
} else {
    document.querySelector("h1").innerHTML = "Player2 Won"
}