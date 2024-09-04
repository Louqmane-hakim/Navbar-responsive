const menu = document.querySelector('.nav-list');
const btnMenu = document.querySelector('.cont-toggle');

btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle('active-menu')
})