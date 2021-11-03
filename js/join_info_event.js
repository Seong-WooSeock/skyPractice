const birth_month = document.querySelectorAll('.birth_month');


//input number속성 maxlength설정
function maxLengthCheck(object){
    if (object.value.length > object.maxLength){
      object.value = object.value.slice(0, object.maxLength);
    }    
}
//input number속성 maxlength설정 인용(https://milkye.tistory.com/265)




birth_month[0].onblur = () => {
    console.log(birth_month[0].value);
}