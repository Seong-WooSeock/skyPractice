let event_tab = document.querySelectorAll('.event_tab');
let header_box = document.querySelectorAll('.header_box');

let goingEvent = document.querySelectorAll('.goingEvent');
let endedEvent = document.querySelectorAll('.endedEvent');

const white_col = 'white';
const gold_grad = "linear-gradient(to right bottom,#C99335, #F0E7A2 70%, #C99335)";

const black_col = 'black';
const focus_out_tab = '#505050e5';


// border-line 오른쪽 값만 두게 하는 함수=================
function border_line_color(style) {
    for (let i = 0; i < event_tab.length; i++){
        event_tab[i].style.borderTop = '0px';
        event_tab[i].style.borderBottom = '0px';
        event_tab[i].style.borderLeft = '0px';
        event_tab[i].style.borderRight = style;
        if (i == 2) {
            event_tab[i].style.borderRight = '0px';
        }
    }
}
// border-line 오른쪽 값만 두게 하는 함수 끝=================

// focustab, focusouttab 구분 함수=================
function tabList(ln1, ln2, ln3, co1, co2) {
    header_box[ln1].style.display = "block";
    header_box[ln2].style.display = "none";
    header_box[ln3].style.display = "none";

    event_tab[ln1].style.background=co1;
    event_tab[ln1].style.webkitTextFillColor = "transparent";
    event_tab[ln1].style.webkitBackgroundClip = "text";
    event_tab[ln1].style.fontWeight = "900";
    
    event_tab[ln2].style.background=co2;
    event_tab[ln2].style.webkitBackgroundClip = "text";
    event_tab[ln2].style.fontWeight = "500";
    event_tab[ln3].style.background=co2;
    event_tab[ln3].style.webkitBackgroundClip = "text";
    event_tab[ln3].style.fontWeight = "500";
}
// focustab, focusouttab 구분 함수 끝=================

// 탭 클릭시 헤더 제목 바뀌는 함수 ======================
function allBlock() {
    for (let j = 0; j < goingEvent.length; j++){
        goingEvent[j].style.display = "block";
    }
    for (let j = 0; j < endedEvent.length; j++){
        endedEvent[j].style.display = "block";
    }
}
function goingBlock() {
    for (let j = 0; j < goingEvent.length; j++){
        goingEvent[j].style.display = "block";
    }
    for (let j = 0; j < endedEvent.length; j++){
        endedEvent[j].style.display = "none";
    }
}
function endedBlock() {
    for (let j = 0; j < goingEvent.length; j++){
        goingEvent[j].style.display = "none";
    }
    for (let j = 0; j < endedEvent.length; j++){
        endedEvent[j].style.display = "block";
    }
}

// 탭 클릭시 헤더 제목 바뀌는 함수 끝 ======================

function lm_event() {
    border_line_color('1px solid black');
    for (let i = 0; i < event_tab.length; i++){
        event_tab[i].addEventListener('click', () => {
            if (i == 0) {
                tabList(0, 1, 2, black_col, focus_out_tab);
                allBlock();
            } else if (i == 1) {
                tabList(1, 0, 2, black_col, focus_out_tab);
                goingBlock();
            } else {
                tabList(2, 0, 1, black_col, focus_out_tab);
                endedBlock();
            }
        });
    }
}

function dm_event() {
    border_line_color('1px solid white');
    for (let i = 0; i < event_tab.length; i++){
        event_tab[i].addEventListener('click', () => {
            if (i == 0) {
                tabList(0, 1, 2, gold_grad, white_col);
                allBlock();
            } else if (i == 1) {
                tabList(1, 0, 2, gold_grad, white_col);
                goingBlock();
            } else {
                tabList(2, 0, 1, gold_grad, white_col);
                endedBlock();
            }
        });
    }
}

// -------------------이벤트정보 클릭 ajax ---------------------
const ev_de_container = document.querySelector('.ev_de_container');
const opacity_dp = document.querySelector('.opacity_dp');
const ev_de_content = document.querySelector('.ev_de_content');
const ev_de_btn = document.querySelector('.ev_de_btn');
let ed_open = document.querySelectorAll('.ed_open');

function aTag_ajax(txt_file) {
    fetch(txt_file).then(response => {
        response.text().then(text => {
            document.querySelector('#ed_co').innerHTML = text;
        })
    });
}

for (let i = 0; i < ed_open.length; i++){
    ed_open[i].onclick = () => {
        ev_de_container.style.display = 'block';
        aTag_ajax("./eventDetail/event" + (i+1));
        ev_de_btn.onclick = () => {
            ev_de_container.style.display = 'none';
        }
        opacity_dp.onclick = () => {
            ev_de_container.style.display = 'none';
        }
    }
}



// -------------------이벤트정보 클릭 ajax ---------------------



// -------------------이미지 경로----------------------

if (localStorage.getItem('color-theme') == 'dark') {
    dm_event()
} else {
    lm_event()
}

// -------------------이미지 경로----------------------



function lm() {
    lm_event()
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
    dm_event()
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




