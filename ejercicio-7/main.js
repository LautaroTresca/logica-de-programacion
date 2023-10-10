// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palabra = document.getElementById("palabra");
const boton = document.getElementById("boton");
const contenedor = document.getElementById("contenedor");

function palindromo(palabra) {
  const array = [];
  for (i = 0; i < palabra.length; i++) {
    array.push(palabra[i]);
  }
  const palabraAlReves = array.reverse().join("");

  if (palabra === palabraAlReves) {
    contenedor.innerHTML = `<p>Es palindromo</p>`;
  } else {
    contenedor.innerHTML = `<p>No es palindromo</p>`;
  }
}

boton.addEventListener("click", () => {
  palindromo(palabra.value.toLowerCase());
});
