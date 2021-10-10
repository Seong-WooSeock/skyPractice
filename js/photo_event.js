var photo = document.querySelectorAll('.photo_by');

    for (let i = 0; i < photo.length; i++) {
        photo[i].addEventListener('mouseover', () => {
            photo[i].style.opacity = "1";
            document.querySelectorAll('.pic')[i].style.borderColor = "black";
        });
    
        photo[i].addEventListener('mouseout', () => {
            photo[i].style.opacity = "0";
            document.querySelectorAll('.pic')[i].style.borderColor = "white";
        });
    }

