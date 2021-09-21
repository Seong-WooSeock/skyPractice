let menuToggle = document.getElementById("headerMenuToggleImg");
let menuToggleBox = document.getElementById("headerMenuToggle");
let menuLists = document.getElementById("menuLists");
let navi = document.getElementById("navi");
let logo = document.getElementById("logoImg");
let firstImg = document.getElementById("firstImg");
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
// --------------헤더박스 반응형 웹 구축-------------------
// 강사님 질문 부분
// if (matchMedia("screen and (min-width: 961px)").matches) {
//     menuToggleBox.style.display = "none";
//     menuToggle.style.display = "none";
//     menuLists.style.display = "flex";
// }else{ 
//      menuToggle.onmouseover = () => {
//          menuToggleBox.style.display = "block";
//          menuLists.style.display = "flex";
// }
// menuToggleBox.onmouseout = () => {
//     menuLists.onmouseover = () => {
//         menuToggleBox.style.display = "block";
//         menuLists.style.display = "flex";
//     }
//     menuToggleBox.style.display = "none";
//     menuLists.style.display = "none";
//     menuToggle.style.display = "block";
//  }  
//}
    menuToggle.onmouseover = () => {
        menuToggleBox.style.display = "block";
        menuLists.style.display = "flex";
    }
    
    menuToggleBox.onmouseout = () => {
        menuLists.onmouseover = () => {
            menuToggleBox.style.display = "block";
            menuLists.style.display = "flex";
        }
        menuToggleBox.style.display = "none";
        menuLists.style.display = "none";
        menuToggle.style.display = "block";
    }

// --------------헤더박스 반응형 웹 구축 끝-------------------

// -------------헤더 박스 스크롤시 높이 조정------------------------

let beforePosition = document.documentElement.scrollTop
document.addEventListener('scroll', function() {
    let afterPosition = document.documentElement.scrollTop;
    if (afterPosition > 50) {
        //스크롤 위아래 조정시
        navi.style.height = "80px";
        logo.style.width = "80px";
        logo.style.height = "80px";
        menuLists.style.paddingTop = "0";
        menuToggle.style.height = "35px";
        menuToggle.style.width = "35px";
    } else {
        //맨위 ( 설정 기존으로 초기화 )
        navi.style.height = "120px";
        logo.style.width = "120px";
        logo.style.height = "120px";
        menuLists.style.paddingTop = "35px";
        menuToggle.style.height = "70px";
        menuToggle.style.width = "70px";
    }
    beforePosition = afterPosition;
});

// -------------헤더 박스 스크롤시 높이 조정 끝------------------------

// --------------광고박스-------------------
// 기존 슬라이드 수를 0으로 초기화
let slideIndex = 0;
showSlides();

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
}
// --------------광고박스 끝-------------------

// --------------이미지박스-------------------
    // 이미지 변경 핸들링 예정
function erickDetail() {
    firstImg.src = "../images/cutMainImg.jpg";
}
function nickDetail() {
    firstImg.src = "../images/cutMainImg.jpg";
}
function juneDetail() {
    firstImg.src = "../images/cutMainImg.jpg";
}
// --------------이미지박스 끝-------------------

