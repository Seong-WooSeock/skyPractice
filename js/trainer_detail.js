let tl = document.querySelectorAll('.TL');
let ta = document.querySelectorAll('.TA');
let focusTab = document.querySelector('.focusTab');

function border_line_color(style) {
    for (let i = 0; i < tl.length; i++){
        tl[i].style.borderTop = '0px';
        tl[i].style.borderBottom = '0px';
        tl[i].style.borderLeft = '0px';
        tl[i].style.borderRight = style;
        if (i == 5) {
            tl[i].style.borderRight = '0px';
        } 
    } 
}

if (localStorage.getItem('color-theme') == 'dark') {
    border_line_color('1px solid white');
} else {
    border_line_color('1px solid black');
}

for (let i = 0; i < tl.length; i++){
    tl[i].addEventListener('mouseover', () => {
        ta[i].style.fontWeight = "900";
        tl[i].addEventListener('mouseout', () => {
            ta[i].style.fontWeight = "100";
            focusTab.style.fontWeight = "900";
        });
    });  
}
function lm() {
    border_line_color('1px solid black');
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
    border_line_color('1px solid white');
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