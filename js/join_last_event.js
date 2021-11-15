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
        error_num[0].style.display = 'none';
        input_guide[0].style.display = 'block';
    } else if(height_input[0].value.length == 2) {
        not_null[0].style.display = 'none';
        error_num[0].style.display = 'none';
        input_guide[0].style.display = 'block';
    }else {
        not_null[0].style.display = 'none';
        input_guide[0].style.display = 'none';
        if (height_input[0].value > 250 || height_input[0].value < 110) {
            error_num[0].style.display = 'block';
        } else {
            error_num[0].style.display = 'none';
        }
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
        input_guide[0].style.display = 'block';
    } else if(height_input[0].value.length == 2) {
        not_null[0].style.display = 'none';
        error_num[0].style.display = 'block';
        input_guide[0].style.display = 'block';
    }else {
        not_null[0].style.display = 'none';
        input_guide[0].style.display = 'none';
        if (height_input[0].value > 250 || height_input[0].value < 110) {
            error_num[0].style.display = 'block';
        } else {
            error_num[0].style.display = 'none';
            
            weight_input[0].onkeyup = () => {
                if (weight_input[0].value.length == 0) {
                    not_null[1].style.display = 'block';
                    error_num[1].style.display = 'none';
                    input_guide[1].style.display = 'none';
                } else if (weight_input[0].value.length == 1) {
                    not_null[1].style.display = 'none';
                    error_num[1].style.display = 'none';
                    input_guide[1].style.display = 'block';
                } else {
                    not_null[1].style.display = 'none';
                    input_guide[1].style.display = 'none';
                    if (weight_input[0].value > 200 || weight_input[0].value < 30) {
                        error_num[1].style.display = 'block';
                    } else {
                        error_num[1].style.display = 'none';
                    }
                }
            }
            
            weight_input[0].onblur = () => {
                if (weight_input[0].value.length == 0) {
                    not_null[1].style.display = 'block';
                    error_num[1].style.display = 'none';
                    input_guide[1].style.display = 'none';
                } else if (weight_input[0].value.length == 1) {
                    not_null[1].style.display = 'none';
                    error_num[1].style.display = 'none';
                    input_guide[1].style.display = 'none';
                }else {
                    not_null[1].style.display = 'none';
                    input_guide[1].style.display = 'none';
                    if (weight_input[0].value > 200 || weight_input[0].value < 30) {
                        error_num[1].style.display = 'block';
                    } else {
                        error_num[1].style.display = 'none';
                        confirm_btn.style.display = 'block';
                        next_btn.onclick = () => {
                            alert('로그인 화면으로 이동합니다!');
                        }
                    }
                }
            }
        }
    }
}


