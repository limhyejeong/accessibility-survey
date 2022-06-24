const cir = document.querySelector('.cover-graphic');
const cirs = document.querySelectorAll('.cover-graphic div');

window.addEventListener('scroll', (e) => {
    let val = window.scrollY;
    cirs[0].style.top = 150 + val * -0.5 + 'px';
    cirs[1].style.bottom = 100 + val * -0.2 + 'px';
    cirs[2].style.top = 200 + val * -0.2 + 'px';
    cirs[3].style.top = 100 + val * -0.2 + 'px';
})