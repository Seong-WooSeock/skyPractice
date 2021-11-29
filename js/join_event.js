let backBtn = document.querySelector(".backBtn");
let goBtn = document.querySelector(".goBtn");

let allCheck = document.getElementById("allCheck");
let each_checkbox = document.querySelectorAll(".each_checkbox");


allCheck.addEventListener('change', (e) => {
    for (let i = 0; i < each_checkbox.length; i++) {
        each_checkbox[i].checked = e.target.checked;
        if (allCheck.checked) {
            goBtn.style.display = "block";
        } else {
            goBtn.style.display = "none";
        }
    }
});

for (let i = 0; i < each_checkbox.length; i++) {
    each_checkbox[i].addEventListener('change', (e) => {
        each_checkbox[i].checked = e.target.checked;
        if (each_checkbox[i].checked == false) {
            allCheck.checked = e.target.checked;
        }

        if (each_checkbox[0].checked == true && each_checkbox[1].checked == true && each_checkbox[2].checked == true) {
            goBtn.style.display = "block";
        } else {
            goBtn.style.display = "none";
        }
        });
}

backBtn.addEventListener('click', () => {
    location.href = '../userLogin.html';
});

goBtn.addEventListener('click', () => {
    location.href = './join_phone.html';
});
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