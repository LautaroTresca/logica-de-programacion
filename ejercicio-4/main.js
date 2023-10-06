// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const boton = document.getElementById("boton");
const contenedor = document.getElementById("contenedor");


function repetir(texto, cantidad) {
    for(i=0; i < cantidad; i++){
        contenedor.innerHTML += `
        <p>${texto}</p>
        `
    }
}

boton.addEventListener("click", () => {
    const texto = document.getElementById("texto").value;
    const cantidad = document.getElementById("cantidad").value;
    repetir(texto, cantidad);
})