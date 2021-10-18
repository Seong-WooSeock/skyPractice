let tl = document.querySelectorAll('.TL');
let ta = document.querySelectorAll('.TA');

let focusTab = document.querySelector('.focusTab');


for (let i = 0; i < tl.length; i++){
    tl[i].style.borderTop = '0px';
    tl[i].style.borderBottom = '0px';
    tl[i].style.borderLeft = '0px';
    tl[i].style.borderRight = '1px solid white';
    if (i == 5) {
        tl[i].style.borderTop = '0px';
        tl[i].style.borderBottom = '0px';
        tl[i].style.borderLeft = '0px';
        tl[i].style.borderRight = '0px';
    } 
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

let nick = document.getElementById("nick");
let zino = document.getElementById("zino");
let june = document.getElementById("june");
let erick = document.getElementById("erick");
let yunee = document.getElementById("yunee");

let pic = document.getElementById("trainerImg");

function nickPic() {
    pic.src = "../../images/nickmainpic.jpg";
}

function zinoPic() {
    pic.src = "../../images/zinomainpic.jpg";
}

function junePic() {
    pic.src = "../../images/junemainpic.jpg";
}

function erickPic() {
    pic.src = "../../images/erickmainpic.jpg";
}

function yuneePic() {
    pic.src = "../../images/yuneemainpic.jpg";
}

