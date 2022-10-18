for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function player() {
        var buttonHtml = this.innerHTML;
        playMusic(buttonHtml);
        buttonanimation(buttonHtml)
    })
}

document.addEventListener("keypress",function(event){
    playMusic(event.key);
    buttonanimation(event.key)
});

function buttonanimation(currentkey){
    var activekey = document.querySelector("."+currentkey);
    activekey.classList.add("pressed");
    setTimeout(function() {activekey.classList.remove("pressed"),100})
}
function playMusic(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(this.innerHTML)
    }
}
