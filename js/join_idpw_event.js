const id_input = document.querySelectorAll('.id_input');
const pw_input = document.querySelectorAll('.pw_input');
const repw_input = document.querySelectorAll('.repw_input');

const id_btn = document.querySelectorAll('.id_btn');

const input_guide = document.querySelectorAll('.input_guide');
const not_null = document.querySelectorAll('.not_null');
const error_num = document.querySelectorAll('.error_num');
const not_overlap = document.querySelector('.not_overlap');
const good_pw = document.querySelectorAll('.good_pw');


const confirm_btn = document.querySelector('.confirm_btn');
const next_btn = document.querySelector('.next_btn');

id_input[0].onkeyup = () => {
    if (id_input[0].value.length == 0) {
        not_null[0].style.display = 'block';
        error_num[0].style.display = 'none';
        input_guide[0].style.display = 'none';
        not_overlap.style.display = 'none';
    } else if (id_input[0].value.length < 9) {
        not_null[0].style.display = 'none';
        error_num[0].style.display = 'none';
        input_guide[0].style.display = 'block';
        not_overlap.style.display = 'none';
    } else {
        not_null[0].style.display = 'none';
        input_guide[0].style.display = 'none';
    }
}

//input내 한글만 입력가능 설정 인용 (https://velog.io/@awesomelon/input-%EC%9E%85%EB%A0%A5-%EC%8B%9C-%ED%95%9C%EA%B8%80%EB%A7%8C-%EC%9E%85%EB%A0%A5%ED%95%98%EA%B2%8C-%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%9D%84-%EB%95%8C)
let onlyEng_num= function() {
    this.value = this.value.replace(/[^a-z0-9]/ig, '');
  };
  id_input[0].addEventListener('keyup', onlyEng_num);
  //-------------input내 한글만 입력가능 설정-------------------

id_input[0].onblur = () => {
    not_null[0].style.display = 'none';
    error_num[0].style.display = 'none';
    input_guide[0].style.display = 'none';

    if (id_input[0].value.length == 0) {
        not_null[0].style.display = 'block';
        error_num[0].style.display = 'none';
        input_guide[0].style.display = 'none';
    }

    id_btn[0].onclick = () => {
        if (id_input[0].value == "wooseock") {
            not_null[0].style.display = 'none';
            error_num[0].style.display = 'block';
            input_guide[0].style.display = 'none';
            not_overlap.style.display = 'none';
        } else {
            not_null[0].style.display = 'none';
            error_num[0].style.display = 'none';
            input_guide[0].style.display = 'none';
            not_overlap.style.display = 'block';
        }
    };
}

pw_input[0].onkeyup = () => {
    if (pw_input[0].value.length == 0) {
        not_null[1].style.display = 'block';
        error_num[1].style.display = 'none';

    } else if (pw_input[0].value.length < 8) {
        not_null[1].style.display = 'none';
        error_num[1].style.display = 'block';

    } else {
        not_null[1].style.display = 'none';
        error_num[1].style.display = 'none';
        good_pw[0].style.display = 'block';
    }
}

pw_input[0].onblur = () => {
    not_null[1].style.display = 'none';
    error_num[1].style.display = 'none';

    if (pw_input[0].value.length == 0) {
        not_null[1].style.display = 'block';
        error_num[1].style.display = 'none';
    } 
}


repw_input[0].onkeyup = () => {
    not_null[2].style.display = 'none';
    if (repw_input[0].value.length == 0) {
        not_null[2].style.display = 'block';
    } 
    if (pw_input[0].value == repw_input[0].value) {
        good_pw[1].style.display = 'block';
        error_num[2].style.display = 'none';
        confirm_btn.style.display = 'block';
    } else {
        good_pw[1].style.display = 'none';
        error_num[2].style.display = 'block';
        confirm_btn.style.display = 'none';
    }
}


repw_input[0].onblur = () => {
    not_null[2].style.display = 'none';
    if (repw_input[0].value.length == 0) {
        not_null[2].style.display = 'block';
    }
    if (pw_input[0].value == repw_input[0].value) {
        good_pw[1].style.display = 'block';
        error_num[2].style.display = 'none';
    
    } else {
        good_pw[1].style.display = 'none';
        error_num[2].style.display = 'block';
        confirm_btn.style.display = 'none';
    }
}
next_btn.addEventListener('click', () => {
    location.href = './join_body.html';
})
  
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