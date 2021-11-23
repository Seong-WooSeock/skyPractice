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


if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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
} else {
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

// 목록 돌아 가기 버튼 ===============================
let backList = document.querySelector(".backList");

backList.addEventListener('click', () => {
    location.href = '../event.html';
})
// 목록 돌아 가기 버튼 끝 ===============================

