// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const texto = document.getElementById("texto");
const palabra = document.getElementById("input");
const boton = document.getElementById("boton");
const contenedor = document.getElementById("contenedor");

function cuantoSeRepiteLaPalabra(texto, palabra) {
  let contador = 0;
  const palabrasEnELTexto = texto.split(" ");
  palabrasEnELTexto.forEach((element) => {
    if (element.includes(palabra) === true) {
      contador++;
      contenedor.innerHTML = `<p>La palabra se repite ${contador} veces</p>`;
    }
  });
}

boton.addEventListener("click", () => {
  cuantoSeRepiteLaPalabra(texto.value, palabra.value);
});
