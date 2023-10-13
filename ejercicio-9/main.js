// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const boton = document.getElementById("boton");
const contenedor = document.getElementById("contenedor");
const minimo = 501;
const maximo = 600;


function numeroRandom(minimo, maximo) {
    let random = Math.floor(Math.random() * (maximo - minimo) + minimo);
    return random
}


boton.addEventListener("click", () => {
    contenedor.innerHTML = `<p>${numeroRandom(minimo, maximo)}</p>`
})
