const thumbnail = document.querySelectorAll('.thumbnail');
const video_box  = document.querySelector('.video_box');
const back_btn = document.getElementById('back_btn');

for (let i = 0; i < thumbnail.length; i++){
    thumbnail[i].addEventListener('click', () => {
        if (i == 0) {
            video_box.style.display = "block";
            video_box.style.top = "1%";
            video_box.style.left = "5%";
        } else if (i == 1) {
            video_box.style.display = "block";
            video_box.style.top = "34%";
            video_box.style.left = "5%";
        } else {
            video_box.style.display = "block";
            video_box.style.top = "67%";
            video_box.style.left = "5%";
        }
    });
}


back_btn.onclick = () => {
    video_box.style.display = "none";
}

// -------------------이미지 경로----------------------
function lm() {
    let headerMenuToggleImg = document.getElementById("headerMenuToggleImg");
    let pilatesLogo = document.getElementById('pilatesLogo');
    let golfLogo = document.getElementById('golfLogo');
    let reading_glasses = document.getElementById('reading_glasses');
    let logoImg = document.getElementById('logoImg');

    pilatesLogo.src = "../../images/pliatesLogo-white.png";
    golfLogo.src = "../../images/golflogo-white.png";
    reading_glasses.src = "../../images/findlogo.png";
    logoImg.src = "../../images/blacklogo.png";
    headerMenuToggleImg.src = "../../images/menuList-black.png";
}

function dm() {
    let headerMenuToggleImg = document.getElementById("headerMenuToggleImg");
    let pilatesLogo = document.getElementById('pilatesLogo');
    let golfLogo = document.getElementById('golfLogo');
    let reading_glasses = document.getElementById('reading_glasses');
    let logoImg = document.getElementById('logoImg');
    
    pilatesLogo.src = "../../images/pliatesLogo.png";
    golfLogo.src = "../../images/golflogo.png";
    reading_glasses.src = "../../images/findlogo-gold.png";
    logoImg.src = "../../images/goldlogo.png";
    headerMenuToggleImg.src = "../../images/menuList.png";
}
// -------------------이미지 경로----------------------