function claves (){
    const elementoNumero1 = document.querySelector ('#número1');
const valorNumero1 = elementoNumero1.value;

const elementoNumero2 = document.querySelector ('#número2');
const valorNumero2 = elementoNumero2.value;

const elementoNumero3 = document.querySelector ('#número3');
const valorNumero3 = elementoNumero3.value;

const pass = valorNumero1 + valorNumero2 + valorNumero3;
const parr = document.querySelector ('p');

if ( pass == 911){
    parr.innerHTML= 'Password 1 correcta!';
}else if(pass == 714){
    parr.innerHTML =  'Password 2 correcta!';
}else {
    parr.innerHTML = 'Password incorrecta';
}
}