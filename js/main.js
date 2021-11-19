let headerMenuToggleImg = document.getElementById("headerMenuToggleImg");
let headerMenuToggle = document.getElementById("headerMenuToggle");
let menuLists = document.getElementById("menuLists");
let navi = document.getElementById("navi");
let logoImg = document.getElementById("logoImg");


// --------------헤더박스 반응형 웹 구축-------------------

headerMenuToggleImg.onmouseover = () => {
    headerMenuToggle.style.display = "block";
    menuLists.style.display = "flex";
}
headerMenuToggle.onmouseout = () => {
    menuLists.onmouseover = () => {
        headerMenuToggle.style.display = "block";
        menuLists.style.display = "flex";
    }
    headerMenuToggle.style.display = "none";
    menuLists.style.display = "none";
    headerMenuToggleImg.style.display = "block";
}

// --------------헤더박스 반응형 웹 구축 끝-------------------

// -------------헤더 박스 스크롤시 높이 조정------------------------

let beforePosition = document.documentElement.scrollTop
document.addEventListener('scroll', function() {
    let afterPosition = document.documentElement.scrollTop;

    if (afterPosition > 50) {
        //스크롤 위아래 조정시
        navi.style.height = "80px";
        logoImg.style.width = "80px";
        logoImg.style.height = "80px";
        menuLists.style.paddingTop = "0";
        headerMenuToggleImg.style.height = "35px";
        headerMenuToggleImg.style.width = "35px";
    } else {
        //맨위 ( 설정 기존으로 초기화 )
        navi.style.height = "120px";
        logoImg.style.width = "120px";
        logoImg.style.height = "120px";
        menuLists.style.paddingTop = "35px";
        headerMenuToggleImg.style.height = "70px";
        headerMenuToggleImg.style.width = "70px";
    }
    beforePosition = afterPosition;
});

// -------------헤더 박스 스크롤시 높이 조정 끝------------------------

