let mapCursor = document.getElementById("centerMap")
let map = document.getElementById("findMapBox");

mapCursor.onclick = () => {
    map.style.display = "inline";
}
map.onmouseover = () => {
    map.style.display = "inline";
}

map.onmouseout = () => {
    map.style.display = "none";
}