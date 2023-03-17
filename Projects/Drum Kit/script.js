for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".kit")[i].addEventListener("click", function() {
        let buttonInner = this.innerHTML;
        makeSound(buttonInner) 
        animation(buttonInner)
    })
}
document.addEventListener("keypress", (event) => {
    makeSound(event.key)
    animation(event.key)
})

function makeSound(key) {
    switch (key) {
        case 'w':
            audio("sounds/tom-1.mp3")
            break;
        case 's':
            audio("sounds/tom-2.mp3")
            break;

        case 'a':
            audio("sounds/tom-3.mp3")
            break;
        case 'd':
            audio("sounds/tom-4.mp3")
            break;

        case 'j':
            audio("sounds/crash.mp3")
            break;

        case 'k':
            audio("sounds/kick-bass.mp3")
            break;

        case 'l':
            audio("sounds/snare.mp3")
            break;
    }
}

function animation(key) {
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(()=>{
        document.querySelector("."+key).classList.remove("pressed");
        
    },100)
}



function audio(path) {
    let w = new Audio(path);
    w.play();
}