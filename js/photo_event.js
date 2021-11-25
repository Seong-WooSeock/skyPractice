var photo = document.querySelectorAll('.photo_by');
var pic =  document.querySelectorAll('.pic')

const white_col = 'white';
const gold_grad = "linear-gradient(to right bottom,#C99335, #F0E7A2 70%, #C99335)";

const black_col = 'black';
const focus_out_tab = '#505050e5';

let photo_tab = document.querySelectorAll('.photo_tab');
let pt_container = document.getElementById('pt_container');
let fc_container = document.getElementById('fc_container');



for (let i = 0; i < photo.length; i++) {
    photo[i].addEventListener('mouseover', () => {
        photo[i].style.opacity = "1";
        pic[i].style.borderColor = "black";
    });

    photo[i].addEventListener('mouseout', () => {
        photo[i].style.opacity = "0";
        pic[i].style.borderColor = "white";
    });
}


function border_line_color(style) {
    for (let i = 0; i < photo_tab.length; i++){
        photo_tab[i].style.borderTop = '0px';
        photo_tab[i].style.borderBottom = '0px';
        photo_tab[i].style.borderLeft = '0px';
        photo_tab[i].style.borderRight = style;
        if (i == 2) {
            photo_tab[i].style.borderRight = '0px';
        }
    }
}


function tabList(ln1, ln2, ln3, co1, co2) {
    photo_tab[ln1].style.background=co1;
    photo_tab[ln1].style.webkitTextFillColor = "transparent";
    photo_tab[ln1].style.webkitBackgroundClip = "text";
    photo_tab[ln1].style.fontWeight = "900";
    
    photo_tab[ln2].style.background=co2;
    photo_tab[ln2].style.webkitBackgroundClip = "text";
    photo_tab[ln2].style.fontWeight = "100";
    photo_tab[ln3].style.background=co2;
    photo_tab[ln3].style.webkitBackgroundClip = "text";
    photo_tab[ln3].style.fontWeight = "100";
}

function dm_photo() {
border_line_color('1px solid white');
for (let i = 0; i < photo_tab.length; i++){
    photo_tab[i].addEventListener('click', () => {

        photo_tab[i].addEventListener('click', () => {
            if (i == 0) {
                pt_container.style.display = "block";
                fc_container.style.display = "block";
                tabList(0, 1, 2 ,gold_grad ,white_col);
                
            } else if (i == 1) {
                pt_container.style.display = "block";
                fc_container.style.display = "none";
                tabList(1, 0, 2,gold_grad ,white_col);
            } else {
                pt_container.style.display = "none";
                fc_container.style.display = "block";
                tabList(2, 0, 1,gold_grad ,white_col);
            }
        });
    });  
}
}

function lm_photo() {
    border_line_color('1px solid black');
for (let i = 0; i < photo_tab.length; i++){
    photo_tab[i].addEventListener('click', () => {

        photo_tab[i].addEventListener('click', () => {
            if (i == 0) {
                pt_container.style.display = "block";
                fc_container.style.display = "block";
                tabList(0, 1, 2 ,black_col ,focus_out_tab);
                
            } else if (i == 1) {
                pt_container.style.display = "block";
                fc_container.style.display = "none";
                tabList(1, 0, 2,black_col ,focus_out_tab);
            } else {
                pt_container.style.display = "none";
                fc_container.style.display = "block";
                tabList(2, 0, 1,black_col ,focus_out_tab);
            }
        });
    });  
}

}
if (localStorage.getItem('color-theme') == 'dark') {
    dm_photo();
} else {
    lm_photo();
}


// -------------------이미지 경로----------------------
function lm() {
    lm_photo();
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
    dm_photo();
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