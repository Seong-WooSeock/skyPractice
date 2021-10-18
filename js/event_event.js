let event_tab = document.querySelectorAll('.event_tab');
let header_box = document.querySelectorAll('.header_box');

let goingEvent = document.querySelectorAll('.goingEvent');
let endedEvent = document.querySelectorAll('.endedEvent');


for (let i = 0; i < event_tab.length; i++){
    event_tab[i].style.borderTop = '0px';
    event_tab[i].style.borderBottom = '0px';
    event_tab[i].style.borderLeft = '0px';
    event_tab[i].style.borderRight = '1px solid white';
    if (i == 2) {
        event_tab[i].style.borderTop = '0px';
        event_tab[i].style.borderBottom = '0px';
        event_tab[i].style.borderLeft = '0px';
        event_tab[i].style.borderRight = '0px';
    }
}

function tabList(ln1, ln2, ln3) {
    header_box[ln1].style.display = "block";
    header_box[ln2].style.display = "none";
    header_box[ln3].style.display = "none";

    event_tab[ln1].style.background="linear-gradient(to right bottom,#C99335, #F0E7A2 70%, #C99335)";
    event_tab[ln1].style.webkitTextFillColor = "transparent";
    event_tab[ln1].style.webkitBackgroundClip = "text";
    event_tab[ln1].style.fontWeight = "900";
    
    event_tab[ln2].style.background="white";
    event_tab[ln2].style.webkitBackgroundClip = "text";
    event_tab[ln2].style.fontWeight = "500";
    event_tab[ln3].style.background="white";
    event_tab[ln3].style.webkitBackgroundClip = "text";
    event_tab[ln3].style.fontWeight = "500";
}
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

for (let i = 0; i < event_tab.length; i++){
    event_tab[i].addEventListener('click', () => {
        if (i == 0) {
            tabList(0, 1, 2);
            allBlock();
        } else if (i == 1) {
            tabList(1, 0, 2);
            goingBlock();
        } else {
            tabList(2, 0, 1);
            endedBlock();
        }
    });
}

let backList = document.querySelector(".backList");

backList.addEventListener('click', () => {
    location.href = '../event.html';
})