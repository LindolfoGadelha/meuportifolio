const formulario = document.querySelector('.contact-me')
const mascara = document.querySelector('.mascara-formulario')
const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});


function toggleMenu(){
    const nav = document.querySelector('.nav-responsive')
    menuHamburguer.classList.toggle('change')

    if (menuHamburguer.classList.contains('change')){
        nav.style.display = 'block';
    }
    else{
        nav.style.display = 'none';
    }

}

function mostraForm(){
    formulario.style.left = "100%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    
    

}
function escondeForm (){
    formulario.style.left = "-700px"
    formulario.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
    

}
   