// --------------헤더박스-------------------
let mainContainer = document.getElementsByClassName("container");
let menuToggle = document.getElementById("headerMenuToggleImg");
let menuToggleBox = document.getElementById("headerMenuToggle");
let menuLists = document.getElementById("menuLists");



    menuToggle.onmouseover = () => {
        menuToggleBox.style.display = "block";
        menuLists.style.display = "flex";
        if (matchMedia("screen and (min-width: 961px)").matches) {
            menuToggleBox.style.display = "none";
            menuToggle.style.display = "none";
            menuLists.style.display = "flex";
        }
    }
    
    menuToggleBox.onmouseout = () => {
        menuLists.onmouseover = () => {
            menuToggleBox.style.display = "block";
            menuLists.style.display = "flex";
        }
        menuToggleBox.style.display = "none";
        menuLists.style.display = "none";
        menuToggle.style.display = "block";
        if (matchMedia("screen and (min-width: 961px)").matches) {
            menuToggleBox.style.display = "none";
            menuToggle.style.display = "none";
            menuLists.style.display = "flex";
        }
    }

// --------------헤더박스 끝-------------------

// --------------광고박스-------------------

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
// --------------광고박스 끝-------------------

// --------------이미지박스-------------------

let firstImg = document.getElementById("firstImg");

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

