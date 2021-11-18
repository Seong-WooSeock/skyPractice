const thumbnail = document.querySelectorAll('.thumbnail');
const video_box  = document.querySelector('.video_box');
const back_btn = document.getElementById('back_btn');

for (let i = 0; i < thumbnail.length; i++){
    thumbnail[i].addEventListener('click', () => {
        if (i == 0) {
            video_box.style.display = "block";
            video_box.style.top = "1%";
            video_box.style.left = "5%";
        } else if (i == 1) {
            video_box.style.display = "block";
            video_box.style.top = "34%";
            video_box.style.left = "5%";
        } else {
            video_box.style.display = "block";
            video_box.style.top = "67%";
            video_box.style.left = "5%";
        }
    });
}


back_btn.onclick = () => {
    video_box.style.display = "none";
}
