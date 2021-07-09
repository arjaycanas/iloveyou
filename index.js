let click = document.querySelectorAll("button");
for (let i = 0 ; i<click.length ; i++){
    click[i].addEventListener("click",function () {
        let press = this.innerHTML;
        makeSound(press);
    });
}
function makeSound(sound){
    switch(sound){
        
        case "I":
            let japanese = new Audio("sound/japanese.mp3");
            japanese.play();
            break;
        case "YOU":
            let korean = new Audio("sound/korean.mp3");
            korean.play();
            break;
        case "LO":
            let spanish = new Audio("sound/spanish.mp3");
            spanish.play();
            break;
        case "VE":
            let vietnam = new Audio("sound/Vietnamese.mp3");
            vietnam.play();
            break;
    }

}

