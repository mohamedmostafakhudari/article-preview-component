const shareBtn = document.getElementById('shareBtn');
const mobileLinks = document.getElementById('mobileLinks');
const desktopLinks = document.getElementById('desktopLinks');
shareBtn.addEventListener('click', activate);
function activate (e) {
    mobileLinks.classList.toggle('active');
    desktopLinks.classList.toggle('fadein');
    desktopLinks.classList.toggle('fadeout');
    shareBtn.classList.toggle('active');
}