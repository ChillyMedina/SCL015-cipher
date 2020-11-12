import cipher from "./cipher.js";

var offset; //se declara variable offset para que guarde numero en la segunda pantalla y poder utilizarlo con el cifrado mas adelante
//---------------GUARDAR NOMBRE---------------
const sectionOne = document.getElementById("nombre");
const sectionTwo = document.getElementById("numero");
const sectionThree = document.getElementById("lista");

document.getElementById("namebtn").onclick = function () { //funcion onclick para el boton "namebtn"
  let input = document.getElementById("nombretxt"); //toma el valor del input nombretxt
  let nombreDeUsuario = input.value;
  let nombreUsuario = document.getElementById("nombre-usuario"); //y muestra el valor del input a traves del "span" en la siguiente pantalla
  nombreUsuario.innerHTML = nombreDeUsuario;
  sectionOne.classList.remove("activo")
  sectionTwo.classList.add("activo")
 
}

//---------------GUARDAR NUMERO---------------
document.getElementById("numberbutton").onclick = () => { // //funcion onclick para el boton "numberbutton"
  let input = document.getElementById("quantity"); //toma el valor del input "quantity"
  let nombreDeUsuario = input.value;
  offset = nombreDeUsuario //variable declarada en un comienzo para guardar numero de offset y usarlo con cifrado
  sectionTwo.classList.remove("activo")
  sectionThree.classList.add("activo")
}

//---------------LISTA---------------
var boton = document.querySelector("#boton"),
  texto = document.querySelector("#valor"),
  lista = document.querySelector("#listaChilly"); //se declaran 3 variables que son los inputs(a traves de los ID)
boton.onclick = (e) => { //se le asigna un evento (e) onclick al boton
  var li = document.createElement("li"); // el evento crea un elemento de tipo "li"(lista dentro de un "ul"(unordered list))
  li.appendChild(document.createTextNode(texto.value)); //a "li" se le agrega un nuevo elemento de tipo texto con el valor de la variable text
  lista.appendChild(li); //a lista se le agrega "li"
  texto.value=""
}
