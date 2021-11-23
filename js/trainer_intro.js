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

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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

const trainer_pic = document.querySelectorAll('.trainer_pic');
let trainerImg = document.getElementById("trainerImg");

trainer_pic[0].onclick = () => {
    trainerImg.src = "../../images/nickmainpic.jpg";
}
trainer_pic[1].onclick = () => {
    trainerImg.src = "../../images/zinomainpic.jpg";
}
trainer_pic[2].onclick = () => {
    trainerImg.src = "../../images/junemainpic.jpg";
}
trainer_pic[3].onclick = () => {
    trainerImg.src = "../../images/erickmainpic.jpg";
}
trainer_pic[4].onclick = () => {
    trainerImg.src = "../../images/yuneemainpic.jpg";
}

