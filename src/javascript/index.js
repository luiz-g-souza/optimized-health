const menuBtn = document.querySelector('.mobile-menu-btn');
const menuMobile = document.querySelector('.mobile-menu');



menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('active')
    menuMobile.classList.toggle('active')
})