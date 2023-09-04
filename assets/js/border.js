const imagen = document.querySelector ('#img');
imagen.onclick = function() {
    if (imagen.classList.contains ('borderRed')) {
        imagen.classList.remove ('borderRed');
    }else  {
        imagen.classList.add('borderRed') ;}
    }
