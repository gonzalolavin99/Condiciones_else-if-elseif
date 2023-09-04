function adopcion (){

const gatoNegro = document.querySelector ('#gatoNegro');
const blancoNegro = Number(gatoNegro.value);

const gatoGris = document.querySelector ('#gatoGris');
const gris = Number (gatoGris.value) ;

const gatoNaranja = document.querySelector ('#gatoNaranja');
const naranja = Number(gatoNaranja.value);

const parr = document.querySelector ('#gatos');

const cantidadGatos = naranja +  gris  + blancoNegro;
if (cantidadGatos <= 10){
    parr.innerHTML = 'Adoptaste '+ cantidadGatos + ' gatos, felicidades y cuídalos mucho.';
} else {
    parr.innerHTML= 'Adoptaste demasiados gatos :('; 
}
}