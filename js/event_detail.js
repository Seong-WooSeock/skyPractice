// 목록 돌아 가기 버튼 ===============================
let backList = document.querySelector(".backList");

backList.addEventListener('click', () => {
    location.href = '../event.html';
})
// 목록 돌아 가기 버튼 끝 ===============================

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