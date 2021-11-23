src="http://code.jquery.com/jquery-latest.js"
src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"

let container = document.getElementById('indexPic');


//-------------커서 따라 움직이는 하트-------------------
// function moveHeart(e) {
//     let heart = document.getElementById("cursorEvent");
//     heart.style.left = e.clientX + "px";
//     heart.style.top = e.clientY + "px";
// }

// container.onmousemove = moveHeart;
//  아이콘이 커서를 덮어 인식을 못하는 오류로 못씀 -- 참고용
//-------------커서 따라 움직이는 하트-------------------

//점에 닿으면 사진 보이게
let erick = document.getElementById('erick');
let nick = document.getElementById('nick');
let june = document.getElementById('june');
let clickMe = document.getElementById('clickMe');
let mainPic = document.getElementById('mainPic');
let exitEvent = document.getElementById('exitEvent');
let allPoint = document.getElementsByClassName('mainEvent');
let erickEx = document.getElementById('erickExplain');
let nickEx = document.getElementById('nickExplain');
let juneEx = document.getElementById('juneExplain');
let erickExDe = document.getElementById('erickExplainDetail');
let nickExDe = document.getElementById('nickExplainDetail');
let nickExDe2 = document.getElementById('nickExplainDetail2');
let juneExDe = document.getElementById('juneExplainDetail');
// erick point------------------------
erick.onclick = () => {
    erick.style.display = "none";
    nick.style.display = "none";
    june.style.display = "none";
    mainPic.src = "../images/erickMain.jpg";
    exitEvent.style.display = "block";
    erickEx.style.display = "block";
    erickExDe.style.display = "block";
}

erick.onmousemove = () => {
    clickMe.style.display = "block";
    clickMe.style.top = "13%";
    clickMe.style.left = "18.8%";
}
erick.onmouseleave = () => {
    clickMe.style.display = "none";
}
// erick point------------------------
// nick point------------------------
nick.onclick = () => {
    erick.style.display = "none";
    nick.style.display = "none";
    june.style.display = "none";
    mainPic.src = "../images/nickMain.jpg";
    exitEvent.style.display = "block";
    nickEx.style.display = "block";
    nickExDe.style.display = "block";
    nickExDe2.style.display = "block";
}

nick.onmousemove = () => {
    clickMe.style.display = "block";
    clickMe.style.top = "7%";
    clickMe.style.left = "45.8%";
}
nick.onmouseleave = () => {
    clickMe.style.display = "none";
}

// nick point------------------------
// june point------------------------
june.onclick = () => {
    erick.style.display = "none";
    nick.style.display = "none";
    june.style.display = "none";
    mainPic.src = "../images/juneMain.jpg";
    exitEvent.style.display = "block";
    juneEx.style.display = "block";
    juneExDe.style.display = "block";
}

june.onmousemove = () => {
    clickMe.style.display = "block";
    clickMe.style.top = "13%";
    clickMe.style.left = "69.4%";
}
june.onmouseleave = () => {
    clickMe.style.display = "none";
}
// june point------------------------
//점에 닿으면 사진 보이게

//끄기 버튼 ----------------------------------------
exitEvent.onclick = () => {
    erick.style.display = "block";
    nick.style.display = "block";
    june.style.display = "block";
    erickEx.style.display = "none";
    erickExDe.style.display = "none";
    nickEx.style.display = "none";
    nickExDe.style.display = "none";
    nickExDe2.style.display = "none";
    juneEx.style.display = "none";
    juneExDe.style.display = "none";

    exitEvent.style.display = "none";
    mainPic.src = "../images/Main.jpg";
}
//끄기 버튼 ----------------------------------------


//----------- 커서내려가면 안보이게-------------------
let bfPosition = document.documentElement.scrollTop
document.addEventListener('scroll', function () {
    let afPosition = document.documentElement.scrollTop;
    if (afPosition > 50) {
        container.style.display = "none";
    }
    bfPosition = afPosition;
});
//----------- 커서내려가면 안보이게-------------------
