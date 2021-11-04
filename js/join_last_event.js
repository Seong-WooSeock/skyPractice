const height_input = document.querySelectorAll('.height_input');
const weight_input = document.querySelectorAll('.weight_input');

const input_guide = document.querySelectorAll('.input_guide');
const not_null = document.querySelectorAll('.not_null');
const error_num = document.querySelectorAll('.error_num');

const confirm_btn = document.querySelector('.confirm_btn');
const next_btn = document.querySelector('.next_btn');

height_input[0].onkeyup = () => {
    if (height_input[0].value.length == 0) {
        not_null[0].style.display = 'block';
        error_num[0].style.display = 'none';
        input_guide[0].style.display = 'none';
    } else if (height_input[0].value.length == 1) {
        not_null[0].style.display = 'none';
        error_num[0].style.display = 'block';
        input_guide[0].style.display = 'block';
    } else if(height_input[0].value.length == 2) {
        not_null[0].style.display = 'none';
        error_num[0].style.display = 'block';
        input_guide[0].style.display = 'block';
    }else {

    }
    
}

height_input[0].onblur = () => {
    if (height_input[0].value.length == 0) {
        not_null[0].style.display = 'block';
        error_num[0].style.display = 'none';
        input_guide[0].style.display = 'none';
    } else if (height_input[0].value.length == 1) {
        not_null[0].style.display = 'none';
        error_num[0].style.display = 'block';
        input_guide[0].style.display = 'none';
    } else if(height_input[0].value.length == 2) {
        not_null[0].style.display = 'none';
        error_num[0].style.display = 'none';
        input_guide[0].style.display = 'block';
    }else {

    }
}

weight_input[0].onkeyup = () => {
    if (weight_input[0].value.length == 0) {
        not_null[1].style.display = 'block';
        error_num[1].style.display = 'none';
        input_guide[1].style.display = 'none';
    } else if (weight_input[0].value.length == 1) {
        not_null[1].style.display = 'none';
        error_num[1].style.display = 'block';
        input_guide[1].style.display = 'none';
    } else if(height_input[0].value.length == 2) {
        not_null[1].style.display = 'none';
        error_num[1].style.display = 'none';
        input_guide[1].style.display = 'block';
    } else {
        
    }
}

weight_input[0].onblur = () => {
    if (weight_input[0].value.length == 0) {
        not_null[1].style.display = 'block';
        error_num[1].style.display = 'none';
        input_guide[1].style.display = 'none';
    } else if (weight_input[0].value.length == 1) {
        not_null[1].style.display = 'none';
        error_num[1].style.display = 'block';
        input_guide[1].style.display = 'none';
    } else if(height_input[0].value.length == 2) {
        not_null[1].style.display = 'none';
        error_num[1].style.display = 'none';
        input_guide[1].style.display = 'block';
    } else {
        
    }
}