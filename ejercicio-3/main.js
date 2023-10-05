// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const texto = document.getElementById("texto");
const caracter = document.getElementById("caracter");
const boton = document.getElementById("boton");


function separarTexto(texto, caracter) {
    if(caracter === ""){
        caracter = " ";
    }
    let palabra = (texto.split(caracter));
    console.log(palabra);
}


boton.addEventListener("click", () => {
    separarTexto(texto.value, caracter.value);
})