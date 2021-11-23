let headerMenuToggleImg = document.getElementById("headerMenuToggleImg");
let headerMenuToggle = document.getElementById("headerMenuToggle");
let menuLists = document.getElementById("menuLists");
let navi = document.getElementById("navi");


let pilatesLogo = document.getElementById('pilatesLogo');
let golfLogo = document.getElementById('golfLogo');
let reading_glasses = document.getElementById('reading_glasses');
let logoImg = document.getElementById('logoImg');

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

// ================라이트모드 다크모드 맨위로 이동======================
const up_to_top = document.querySelector('.up_to_top');
const light_mode = document.querySelector('.light_mode');
const dark_mode = document.querySelector('.dark_mode');

const isUserColorTheme = localStorage.getItem('color-theme');
const isOsColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const getUserTheme = () => (isUserColorTheme ? isUserColorTheme : isOsColorTheme);

window.onload = () => {
    if (getUserTheme === 'dark') {
      localStorage.setItem('color-theme', 'dark');
      document.documentElement.setAttribute('color-theme', 'dark');
    } else {
      localStorage.setItem('color-theme', 'light');
      document.documentElement.setAttribute('color-theme', 'light');
    }
  };


light_mode.onclick = () => {
    localStorage.setItem('color-theme', 'light');
    document.documentElement.setAttribute('color-theme', 'light');
    dark_mode.style.display = 'block';
    light_mode.style.display = 'none';
    up_to_top.style.color = '#090909';
    up_to_top.style.border = '2px solid #090909';
    up_to_top.style.background = '#CCCCCC';
    pilatesLogo.src = "../images/pliatesLogo-white.png";
    golfLogo.src = "../images/golflogo-white.png";
    reading_glasses.src = "../images/findlogo.png";
    logoImg.src = "../images/blacklogo.png";
    headerMenuToggleImg.src = "../images/menuList-black.png";
}

dark_mode.onclick = () => {
    localStorage.setItem('color-theme', 'light');
    document.documentElement.setAttribute('color-theme', 'dark');
    dark_mode.style.display = 'none';
    light_mode.style.display = 'block';
    up_to_top.style.color = 'white';
    up_to_top.style.border = '2px solid white';
    up_to_top.style.background = 'none';
    pilatesLogo.src = "../images/pliatesLogo.png";
    golfLogo.src = "../images/golflogo.png";
    reading_glasses.src = "../images/findlogo-gold.png";
    logoImg.src = "../images/goldlogo.png";
    headerMenuToggleImg.src = "../images/menuList.png";
}

up_to_top.onclick = () => {
    window.scrollTo(0, 0);
}


// ================라이트모드 다크모드 맨위로 이동 끝===================

