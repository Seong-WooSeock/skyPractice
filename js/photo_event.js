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

let all = document.getElementById('all');
let pt = document.getElementById('pt');
let fc = document.getElementById('fc');
let pt_container = document.getElementById('pt_container');
let fc_container = document.getElementById('fc_container');
all.onclick = () => {
    all.style.background = "linear-gradient(to right bottom,white, #838383 50%, #ffffff)";
    all.style.color = "#191919";
    pt.style.background = "none";
    pt.style.color = "white";
    fc.style.background = "none";
    fc.style.color = "white";
    pt_container.style.display = "block";
    fc_container.style.display = "block";
}

pt.onclick = () => {
    pt.style.background = "linear-gradient(to right bottom,white, #838383 50%, #ffffff)";
    pt.style.color = "#191919";
    all.style.background = "none";
    all.style.color = "white";
    fc.style.background = "none";
    fc.style.color = "white";
    pt_container.style.display = "block";
    fc_container.style.display = "none";
}

fc.onclick = () => {
    fc.style.background = "linear-gradient(to right bottom,white, #838383 50%, #ffffff)";
    fc.style.color = "#191919";
    all.style.background = "none";
    all.style.color = "white";
    pt.style.background = "none";
    pt.style.color = "white";
    pt_container.style.display = "none";
    fc_container.style.display = "block";
}

