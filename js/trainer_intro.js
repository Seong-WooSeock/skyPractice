let trainerTabDetail = document.querySelectorAll('.trainerTabDetail');
let trainerIntro = document.querySelectorAll('.trainerIntro');
for (let i = 0; i < trainerTabDetail.length; i++){
    for (let j = 0; j < trainerIntro.length; j++){
        trainerTabDetail[i].addEventListener('click', () => {
            if (j == i) {
                trainerIntro[j].style.display = "block";
                trainerTabDetail[j].style.background = "linear-gradient(to right bottom,white, #838383 50%, #ffffff)";
                trainerTabDetail[j].style.color = "#191919";
            } else {
                trainerIntro[j].style.display = "none";
                trainerTabDetail[j].style.background = "none";
                trainerTabDetail[j].style.color = "white";
            } 
        });
    }
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

