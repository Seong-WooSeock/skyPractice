let goNick = document.getElementsByClassName('goNick');
let goZino = document.getElementsByClassName('goZino');
let goJune = document.getElementsByClassName('goJune');
let goErick = document.getElementsByClassName('goErick');
let goYunee = document.getElementsByClassName('goYunee');

let TrainerTabDetail = document.querySelectorAll('.trainerTabDetail');
let TrainerIntro = document.querySelectorAll('.trainerIntro');
let go;

function nickGo() {
    location.href = 'trainerIntroduce.html';
}
function nickGo2() {
    window.onload = () => {
        trainerIntro[1].style.display = "block";
        trainerTabDetail[1].style.background = "linear-gradient(to right bottom,white, #838383 50%, #ffffff)";
        trainerTabDetail[1].style.color = "#191919";
        trainerIntro[0].style.display = "none";
        trainerTabDetail[0].style.background = "none";
        trainerTabDetail[0].style.color = "white";
    }
}
function zinoGo() { 
    location.href = 'trainerIntroduce.html';
}
function juneGo() { 
    location.href = 'trainerIntroduce.html';
}
function erickGo() { 
    location.href = 'trainerIntroduce.html';
}
function yuneeGo() { 
    location.href = 'trainerIntroduce.html';
}


