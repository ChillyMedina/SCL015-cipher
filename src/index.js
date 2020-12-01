/*import cipher from "./cipher.js";*/

//---------------GUARDAR NOMBRE---------------
const sectionOne = document.getElementById("nombre"); //se declara constante para cada section
const sectionThree = document.getElementById("lista");

document.getElementById("namebtn").onclick = function () { //funcion onclick para el boton "namebtn"
  let input = document.getElementById("nombretxt"); //variable toma el valor del input nombretxt
  let nombreDeUsuario = input.value; // se declara variable nombreDeUsuario para que sea igual al valor ingresado en la variable input
  let nombreUsuario = document.getElementById("nombre-usuario"); //y muestra el valor del input a traves del "span" en la siguiente pantalla
  nombreUsuario.innerHTML = nombreDeUsuario; 
  //---------------PASAR PAGINA 1 a 2---------------
  sectionOne.classList.remove("activo") //a sectionOne "nombre" se le quita la clase activo que ya tiene asignada en HTML y en CSS(con ciertos valores)
  sectionThree.classList.add("activo") //a sectionTwo "numero" se le añade la clase activo que esta en CSS como #numero.activo y se muestran los valores ingresados.
}

//---------------LISTA---------------
let boton = document.querySelector("#boton"), //
  texto = document.querySelector("#valor"), //input con id valor
  lista = document.querySelector("#listaChilly"); //se declaran 3 variables que son los inputs(a traves de los ID)
boton.onclick = (e) => { //se le asigna un evento (e) onclick al boton
  let li = document.createElement("li"); // el evento crea un elemento de tipo "li"(lista)
  li.appendChild(document.createTextNode(texto.value)); //a "li" se le agrega un nuevo elemento(nodo) de tipo texto(createtextnode) con el valor de la variable texto
  lista.appendChild(li); //a la variable lista se le agrega un nuevo nodo "li" dentro del id "listaChilly"la cual a su vez es una ul(unordered list)
  texto.value="" //se deja vacia la variable texto al crear un nuevo "li"
}

//---------------CIFRADO/DESCIFRADO---------------

const botonCifrar = document.getElementById("encodeBtn"); // se declara variable para el boton de cifrado(encodeBtn)
botonCifrar.addEventListener("click", cipher);//esta variable se le añade un evento(funcion cipher) al hacer click.

function cipher() {
  //Declaro la variable del mensaje ingresado, llamo al valor con el id "containerOne" y lo paso a mayúsculas
  let messageIn = document.getElementById("containerOne").value.toUpperCase();
  //Convierto el desplazamiento(offset) a numero entero con parseInt
  let offset = parseInt(document.getElementById("offset").value);

  let message = ""
  //Inicio el bucle, declaro e inicializo la variable i, que será menor al largo/longitud del mensaje, incrementado a un valor
  for (let i = 0; i < messageIn.length; i++) {
      //Pasamos el mensaje a código ASCII
      let messageAscii = messageIn.charCodeAt(i);
      // console.log(1, messageAscii)
      //Aplicamos la formula para obtener la nueva posicion de la letra
      let letterNewPosition = (messageAscii - 65 + offset) % 26 + 65;
      // console.log(2, letterNewPosition)
      //Si el valor es estrictamente igual a 32 (espacio en ASCII) le digo a la variable que mantenga el mismo valor
      if (messageAscii === 32) { letterNewPosition = 32; }
      //se declara variable que convierta el ASCII a la nueva posición
      let sinceAscii = String.fromCharCode(letterNewPosition);
      // console.log(3, sinceAscii)
      //concateno las variables message y sinceAscii para que muestre palabras enteras y no solo letras una por una
      message += sinceAscii;
      console.log(4, message)
  }
  document.getElementById("containerTwo").innerHTML = message;
  return message;
}

const botonDescifrar = document.getElementById("decodeBtn");
botonCifrar.addEventListener("click", decode);

function decode () {
  let messageOf = document.getElementById("containerTwo").value.toUpperCase();
  let offset = parseInt(document.getElementById("offset").value);
  let messageOut = ""
  for (let i = 0; i < messageOf.length; i++) {
      let messageAsciiOf = messageOf.charCodeAt(i);
      let letterNewPositionOf = (messageAsciiOf + 65 - offset) % 26 + 65;
      if (messageAsciiOf === 32) { letterNewPositionOf = 32; }
      let sinceAsciiOf = String.fromCharCode(letterNewPositionOf);
      messageOut += sinceAsciiOf;
      console.log(messageOut)
}
document.getElementById("containerTwo").innerHTML = messageOut;
return messageOut;
}

