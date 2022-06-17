

 function mostrar(e){
    var despliegue=document.querySelector('.menu-despliegue');
    var sombra=document.querySelector('.modely');
    despliegue.style.display="block";
    sombra.style.filter="blur(2px)"
    e.preventDefault()
}
function cerrar(e){
    var despliegue=document.querySelector('.menu-despliegue');
    despliegue.style.display="none"
    var sombra=document.querySelector('.modely');
    sombra.style.filter="none"
}
 
