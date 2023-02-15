let string ="";
let button = document.querySelectorAll(".button");
let newArr = Array.from(button);
newArr.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector(".input-inner").value = string;
        } else if (e.target.innerHTML == "AC") {
            string = "";
            document.querySelector(".input-inner").value = string;
        } else if (e.target.innerHTML == "M") {
            string= string + "%";
            document.querySelector(".input-inner").value = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector(".input-inner").value = string;
        }

    })
});