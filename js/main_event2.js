


if (matchMedia("screen and (min-width: 961px)").matches) {
    let before_scroll_position = document.documentElement.scrollTop
document.addEventListener('scroll', function () {
    let after_scroll_position = document.documentElement.scrollTop;
    console.log(after_scroll_position);
    if (after_scroll_position > 50) {

    } else {

    }
    before_scroll_position = after_scroll_position;
});
}
