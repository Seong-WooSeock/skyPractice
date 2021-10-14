let tl = document.querySelectorAll('.TL');
let ta = document.querySelectorAll('.TA');
let focusTabLi = document.querySelector('.focusTabLi');
let focusTab = document.querySelector('.focusTab');

for (let i = 0; i < tl.length; i++){
    tl[i].addEventListener('mouseover', () => {
        tl[i].style.background = "linear-gradient(to right bottom,white, #3b3b3b 50%, #ffffff)";
        tl[i].style.backgroundSize = "300% 300%";
        ta[i].style.color = "#191919";
        tl[i].style.animation = "change_trainer_text_gradient 2s infinite alternate";
    });

    tl[i].addEventListener('mouseout', () => {
        focusTabLi.style.background = "linear-gradient(to right bottom,white, #838383 50%, #ffffff)";
        focusTab.style.color = "#191919";
        tl[i].style.background = "none";
        ta[i].style.color = "white";
    });
}

let nick = document.getElementById("nick");
let zino = document.getElementById("zino");
let june = document.getElementById("june");
let erick = document.getElementById("erick");
let yunee = document.getElementById("yunee");

let pic = document.getElementById("trainerImg");

function nickPic() {
    pic.src = "../../images/nickmainpic.jpg";
}

function zinoPic() {
    pic.src = "../../images/zinomainpic.jpg";
}

function junePic() {
    pic.src = "../../images/junemainpic.jpg";
}

function erickPic() {
    pic.src = "../../images/erickmainpic.jpg";
}

function yuneePic() {
    pic.src = "../../images/yuneemainpic.jpg";
}

