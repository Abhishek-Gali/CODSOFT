let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
menu.classList.toggle('bx-x');
navbar.classlist.toggle('active');
}

window.onscroll = () => {
menu.classList.remove('bx-x');
navbar.classList.remove('active');
}

const typed = new Typed('.mulitple-text', { strings: ['Student', 'Undergraduate','Python Developer',],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay:1200,
    loop:true
});