const closeBtn = document.getElementById('close');
const menu = document.getElementById('menu');
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');

menu.addEventListener('click', () => {
    document.body.style.position = 'fixed'
    menu.classList.add('hidden');
    menu.classList.remove('grid');
    navMenu.classList.remove('hidden');
    navMenu.classList.add('show');
    closeBtn.classList.remove('hidden');
    closeBtn.classList.add('active-icon');
});

closeBtn.addEventListener('click', () => {
    closeBtn.classList.add('hidden');
    document.body.style.position = 'relative'
    closeBtn.classList.remove('active-icon');
    navMenu.classList.add('hidden')
    navMenu.classList.remove('show')
    menu.classList.add('grid');
    menu.classList.remove('hidden')
});

navLink.forEach(nav => {
    nav.addEventListener('click', () => {
        navMenu.classList.add('hidden');
        closeBtn.classList.add('hidden');
        menu.classList.add('grid');
        menu.classList.remove('hidden')
        closeBtn.classList.remove('active-icon');
        document.body.style.position = 'relative'
    })
})