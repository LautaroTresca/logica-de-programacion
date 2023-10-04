// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const entradaDeTexto = document.getElementById("texto");
const boton = document.getElementById("enviar");
const main = document.querySelector("main");
const contenedor = document.getElementById("contenedor");

const numeroDeCaracteres = (string) => {
    const cantidadCaracteres = string.length;
    contenedor.innerHTML = `
    <p>La cantidad de caracteres de "${string}" es ${cantidadCaracteres} </p>
    `     
}


boton.addEventListener("click", () => {
    numeroDeCaracteres(entradaDeTexto.value);
})
