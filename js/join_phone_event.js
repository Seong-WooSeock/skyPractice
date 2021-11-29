const phone_input = document.querySelectorAll('.phone_input');
const certification_btn = document.querySelector('.certification_btn');
const recertification_btn = document.querySelector('.recertification_btn')
const not_null = document.querySelectorAll('.not_null');
const not_hyphen = document.querySelector('.not_hyphen');
const error_num = document.querySelectorAll('.error_num');
const input_guide = document.querySelector('.input_guide');
const certification_number_box = document.querySelector('.certification_number_box');
const countDown = document.querySelector('.countDown');
const certification_number = document.querySelectorAll('.certification_number');
const confirm_btn = document.querySelector('.confirm_btn');
const next_btn = document.querySelector('.next_btn');


//input number속성 maxlength설정
function maxLengthCheck(object){
    if (object.value.length > object.maxLength){
      object.value = object.value.slice(0, object.maxLength);
    }    
}
//input number속성 maxlength설정 인용(https://milkye.tistory.com/265)

phone_input[0].onkeyup = () => {
    if(phone_input[0].value.length == 0){
        not_null[0].style.display = 'block';
        not_hyphen.style.display = 'none';
        error_num[0].style.display = 'none';
    } else if (phone_input[0].value.length < 11) {
        not_hyphen.style.display = 'block';
        not_null[0].style.display = 'none';
        error_num[0].style.display = 'none';
    } else if (phone_input[0].value.length == 11) {
        not_hyphen.style.display = 'none';
        not_null[0].style.display = 'none';
    }
}
console.log(phone_input[0].value);
phone_input[0].onblur = () => {
    if (phone_input[0].value.length == 0) {
        not_null[0].style.display = 'block';
    } else if (phone_input[0].value.length == 11) {
        if (phone_input[0].value == "01011111111") {
            certification_btn.addEventListener('click', () => {
                recertification_btn.style.display = 'block';
                certification_btn.style.display = 'none';
                error_num[0].style.display = 'none';
                certification_number_box.style.display = 'block';
                countDown.style.display = 'block';
                cd_timer();
                recertification_btn.addEventListener('click', () => {
                    cd_timer();
                });
            });
        } else {
            recertification_btn.style.display = 'none';
            certification_btn.style.display = 'block';
            error_num[0].style.display = 'block';
        }
    }
}


certification_number[0].onkeyup = () => {
    if(certification_number[0].value.length == 0){
        not_null[1].style.display = 'block';
        input_guide.style.display = 'none';
        error_num[1].style.display = 'none'
        confirm_btn.style.display = 'none';
    } else if (certification_number[0].value.length < 6) {
        not_null[1].style.display = 'none';
        input_guide.style.display = 'block';
        confirm_btn.style.display = 'none';
    } else if (certification_number[0].value.length == 6) {
        not_null[1].style.display = 'none';
        input_guide.style.display = 'none';
        if (certification_number[0].value == "111111") {
            confirm_btn.style.display = 'block';
            error_num[1].style.display = 'none';
            alert('인증완료');
        } else {
            confirm_btn.style.display = 'none';
            error_num[1].style.display = 'block';
        }
    }
}

certification_number[0].onblur = () => {
    if(certification_number[0].value.length == 0){
        not_null[1].style.display = 'block';
        confirm_btn.style.display = 'none';
    } else if (certification_number[0].value.length == 6) {
        if (certification_number[0].value == "111111") {
            confirm_btn.style.display = 'block';
            error_num[1].style.display = 'none';
        } else {
            confirm_btn.style.display = 'none';
            error_num[1].style.display = 'block';
        }
    }
}

// 타이머 인용 출처(https://www.delftstack.com/ko/howto/javascript/count-down-timer-in-javascript/)
function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
}

function startCountDown(duration, element) {

    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;

    setInterval(function () {

        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);

        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) {
            alert('인증번호 입력시간 초과 재요청 해주세요');
        };

    }, 1000);
}

function cd_timer() {
    let time_minutes = 3;
    let time_seconds = 0; 

    let duration = time_minutes * 60 + time_seconds;


    countDown.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;

    startCountDown(--duration, countDown);
}
// 타이머 인용 출처(https://www.delftstack.com/ko/howto/javascript/count-down-timer-in-javascript/)

next_btn.addEventListener('click', () => {
    location.href = './join_personal_info.html';
});

// -------------------이미지 경로----------------------
function lm() {
    let headerMenuToggleImg = document.getElementById("headerMenuToggleImg");
    let pilatesLogo = document.getElementById('pilatesLogo');
    let golfLogo = document.getElementById('golfLogo');
    let reading_glasses = document.getElementById('reading_glasses');
    let logoImg = document.getElementById('logoImg');

    pilatesLogo.src = "../../../images/pliatesLogo-white.png";
    golfLogo.src = "../../../images/golflogo-white.png";
    reading_glasses.src = "../../../images/findlogo.png";
    logoImg.src = "../../../images/blacklogo.png";
    headerMenuToggleImg.src = "../../../images/menuList-black.png";
}

function dm() {
    let headerMenuToggleImg = document.getElementById("headerMenuToggleImg");
    let pilatesLogo = document.getElementById('pilatesLogo');
    let golfLogo = document.getElementById('golfLogo');
    let reading_glasses = document.getElementById('reading_glasses');
    let logoImg = document.getElementById('logoImg');
    
    pilatesLogo.src = "../../../images/pliatesLogo.png";
    golfLogo.src = "../../../images/golflogo.png";
    reading_glasses.src = "../../../images/findlogo-gold.png";
    logoImg.src = "../../../images/goldlogo.png";
    headerMenuToggleImg.src = "../../../images/menuList.png";
}
// -------------------이미지 경로----------------------