/*------ir arriba---------*/
document.querySelector('.icono')
.addEventListener('click',() =>{
window.scrollTo({
 top:0,
 behavior:'smooth'
});
});

/*seguro que desea salir*/
function salir(){
    var respuesta = confirm('¿Seguro que desea abandonar esta pagina?');
    if (respuesta == true)
    {
        return true;
    }
    else
    {
     return false;
    }
}

