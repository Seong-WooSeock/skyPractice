var photo = document.querySelectorAll('.photo_by');
var pic =  document.querySelectorAll('.pic')
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


let photo_tab = document.querySelectorAll('.photo_tab');
let pt_container = document.getElementById('pt_container');
let fc_container = document.getElementById('fc_container');

for (let i = 0; i < photo_tab.length; i++){
    photo_tab[i].style.borderTop = '0px';
    photo_tab[i].style.borderBottom = '0px';
    photo_tab[i].style.borderLeft = '0px';
    photo_tab[i].style.borderRight = '1px solid white';
    if (i == 2) {
        photo_tab[i].style.borderTop = '0px';
        photo_tab[i].style.borderBottom = '0px';
        photo_tab[i].style.borderLeft = '0px';
        photo_tab[i].style.borderRight = '0px';
    }
}

function tabList(ln1, ln2, ln3) {
    photo_tab[ln1].style.background="linear-gradient(to right bottom,#C99335, #F0E7A2 70%, #C99335)";
    photo_tab[ln1].style.webkitTextFillColor = "transparent";
    photo_tab[ln1].style.webkitBackgroundClip = "text";
    photo_tab[ln1].style.fontWeight = "900";
    
    photo_tab[ln2].style.background="white";
    photo_tab[ln2].style.webkitBackgroundClip = "text";
    photo_tab[ln2].style.fontWeight = "100";
    photo_tab[ln3].style.background="white";
    photo_tab[ln3].style.webkitBackgroundClip = "text";
    photo_tab[ln3].style.fontWeight = "100";
}

for (let i = 0; i < photo_tab.length; i++){
    photo_tab[i].addEventListener('click', () => {

        photo_tab[i].addEventListener('click', () => {
            if (i == 0) {
                pt_container.style.display = "block";
                fc_container.style.display = "block";
                tabList(0, 1, 2);
                
            } else if (i == 1) {
                pt_container.style.display = "block";
                fc_container.style.display = "none";
                tabList(1, 0, 2);
            } else {
                pt_container.style.display = "none";
                fc_container.style.display = "block";
                tabList(2, 0, 1);
            }
        });
    });

    
}