// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const boton = document.getElementById("enviar");
const contenedor = document.getElementById("contenedor");


const recortarTexto = (oracion, num) => {
    // Uso el metodo slice, el primer parametro le indico que arranque del final de la cadena de texto y por segundo parametro le paso el numero que ingreso el usuario para que recorte esa cantidad.
    const oracionRecortada = oracion.slice(0, num);
    // Muestro el resultado por pantalla insertando HTML
    contenedor.innerHTML = `
        <span>Su palabra recortada quedaria: ${oracionRecortada}</span>
    `
}
    
    
    boton.addEventListener("click", () =>{
    // Recupero los valores ingresados por el usuario
    const oracion = document.getElementById("texto").value;
    const numero = document.getElementById("numero").value;
    // Llamo a la funcion y le paso por parametros los valores del usuario, primero la oracion que quiere recortar y segundo el numero de caracteres que quiere mostrar de la oracion.
    recortarTexto(oracion, numero);
})