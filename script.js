// transformar menu hamburguer em x
const menuHamburguer = document.querySelector('.menu-hamburguer');

menuHamburguer.addEventListener('click' , () =>{
    toggleMenu();
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');
}

if (menuHamburguer.classList.contains('change')) {
    nav.style.display = 'block';
} else {
    nav.style.display = 'none';
}