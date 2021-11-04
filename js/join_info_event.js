const name_input = document.querySelectorAll('.name_input');

const birth_year = document.querySelectorAll('.birth_year');
const birth_month = document.querySelectorAll('.birth_month');
const birth_date = document.querySelectorAll('.birth_date');

const gender = document.querySelectorAll('.gender');

const input_guide = document.querySelectorAll('.input_guide');
const not_null = document.querySelectorAll('.not_null');
const error_num = document.querySelectorAll('.error_num');

const confirm_btn = document.querySelector('.confirm_btn');
const next_btn = document.querySelector('.next_btn');

//input number속성 maxlength설정
function maxLengthCheck(object){
    if (object.value.length > object.maxLength){
      object.value = object.value.slice(0, object.maxLength);
    }    
}
//input number속성 maxlength설정 인용(https://milkye.tistory.com/265)
name_input[0].onkeyup = () => {
  not_null[0].style.display = 'none';
  error_num[0].style.display = 'none';
  input_guide[0].style.display = 'none';

  if (name_input[0].value.length == 0) {
    not_null[0].style.display = 'block';
  } else if (name_input[0].value.length < 3) {
    input_guide[0].style.display = 'block';
    error_num[0].style.display = 'none';
  }
}

name_input[0].onblur = () => {
  not_null[0].style.display = 'none';  
  if (name_input[0].value.length == 0) {
    not_null[0].style.display = 'block';
  }
  btn_block();
}
//input내 한글만 입력가능 설정 인용 (https://velog.io/@awesomelon/input-%EC%9E%85%EB%A0%A5-%EC%8B%9C-%ED%95%9C%EA%B8%80%EB%A7%8C-%EC%9E%85%EB%A0%A5%ED%95%98%EA%B2%8C-%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%9D%84-%EB%95%8C)
let onlyKorean = function() {
  let pattern = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
  this.value = this.value.replace(pattern, '');
  setTimeout(() => {
    error_num[0].style.display = 'block';
    input_guide[0].style.display = 'none';
    not_null[0].style.display = 'none';
  },1000);
};
name_input[0].addEventListener('keypress', onlyKorean);
//-------------input내 한글만 입력가능 설정-------------------



birth_year[0].onkeyup = () => {
  if (birth_year[0].value.length == 0) {
    not_null[1].style.display = 'block';
    error_num[1].style.display = 'none';
    input_guide[1].style.display = 'none';
  } else if (birth_year[0].value.length < 4) {
    not_null[1].style.display = 'none';
    error_num[1].style.display = 'none';
    input_guide[1].style.display = 'block';
  } else if (birth_year[0].value.length == 4){
    not_null[1].style.display = 'none';
    input_guide[1].style.display = 'none';
    if (birth_year[0].value < 1900) {
      error_num[1].style.display = 'block';
    } else if (birth_year[0].value > 2022) {
      error_num[1].style.display = 'block';
    } else {
      error_num[1].style.display = 'none';
    }
  }
    
  
}

birth_year[0].onblur = () => {
  not_null[1].style.display = 'none';
  error_num[1].style.display = 'none';
  input_guide[1].style.display = 'none';
  if (birth_year[0].value.length == 0) {
    not_null[1].style.display = 'block';
    error_num[1].style.display = 'none';
    input_guide[1].style.display = 'none';
  }
  btn_block();
}
gender[0].onblur = () => {
  if (gender[0].value == 0) {
    error_num[2].style.display = 'block';
  } else {
    error_num[2].style.display = 'none';
  }
  btn_block();
}

birth_month[0].onblur = () => {
  btn_block();
}

birth_date[0].onblur = () => {
  btn_block();
}

let btn_block = function(){
  if ((name_input[0].value.length >= 3) && (birth_year[0].value > 0 && birth_month[0].value > 0 && birth_date[0].value > 0) && (gender[0].value > 0)) {
    confirm_btn.style.display = 'block';
  } else {
    confirm_btn.style.display = 'none';
  }
}

next_btn.addEventListener('click', () => {
  location.href = './join_idpw.html';
})


