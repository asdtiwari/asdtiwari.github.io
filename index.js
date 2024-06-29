/* ----------------- Background -------------------- */
/* To set the background in header section which is responsive and will change automatically as per the size of screen */
function setBackgroundImage() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if(height > width * 1.1) {
        document.getElementById('header-container').style.backgroundImage = "url(images/mobile-background.jpg)";
    }
    else {
        document.getElementById('header-container').style.backgroundImage = "url(images/background.jpg)";
    }
}
// Correctly assign the event handlers
window.onresize = setBackgroundImage;
window.onload = setBackgroundImage;
// Initial call to set the background image on page load
setBackgroundImage();

/* ----------------- SideMenu -------------------- */
function openSideMenu() {
    document.getElementById('side-menu').style.top = '0';
    document.getElementById('open-menu-button').style.display = 'none';
}

function closeSideMenu() {
    document.getElementById('side-menu').style.top = '-100%';
    document.getElementById('open-menu-button').style.display = 'block';
}
