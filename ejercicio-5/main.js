// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const boton = document.getElementById("boton");
const contenedor = document.getElementById("contenedor");
const array = [];

invertir = (texto) => {
  if (texto != "") {
    for (i = 0; i < texto.length; i++) {
      array.push(texto[i]);
    }

    const textoInvertido = array.reverse().join("");
    contenedor.innerHTML = `
                  <p>El texto invertido es:  "${textoInvertido}"</p>
              `;
  } else {
    contenedor.innerHTML = `
        <p style= "color: red;">Tienes que ingresar algun texto o frase para invertir</p>
        `;
  }
};

boton.addEventListener("click", () => {
  const texto = document.getElementById("texto").value;
  invertir(texto);
});
