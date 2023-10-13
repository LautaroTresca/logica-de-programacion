// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const input = document.getElementById("numero");
const boton = document.getElementById("boton");
const conten = document.getElementById("conten");

function esCapicua(numero) {
  const array = [];
  for (i = 0; i < numero.length; i++) {
    array.push(numero[i]);
  }
  if (array.join("") === array.reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

boton.addEventListener("click", () => {
  conten.innerHTML = `<p>${esCapicua(input.value)}</p>`;
});
