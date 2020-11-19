import cipher from "./cipher.js";

let offset; //se declara variable offset para que guarde numero en la segunda pantalla y poder utilizarlo con el cifrado mas adelante
//---------------GUARDAR NOMBRE---------------
const sectionOne = document.getElementById("nombre"); //se declara constante para cada section
const sectionTwo = document.getElementById("numero");
const sectionThree = document.getElementById("lista");

document.getElementById("namebtn").onclick = function () { //funcion onclick para el boton "namebtn"
  let input = document.getElementById("nombretxt"); //variable toma el valor del input nombretxt
  let nombreDeUsuario = input.value;
  let nombreUsuario = document.getElementById("nombre-usuario"); //y muestra el valor del input a traves del "span" en la siguiente pantalla
  nombreUsuario.innerHTML = nombreDeUsuario;
  //---------------PASAR PAGINA 1 a 2---------------
  sectionOne.classList.remove("activo") //a sectionOne "nombre" se le quita la clase activo que ya tiene asignada en HTML y en CSS(con ciertos valores)
  sectionTwo.classList.add("activo") //a sectionTwo "numero" se le añade la clase activo que esta en CSS como #numero.activo y se muestran los valores ingresados.
 
}

//---------------GUARDAR NUMERO---------------
document.getElementById("numberbutton").onclick = () => { // //funcion onclick para el boton "numberbutton"
  let input = document.getElementById("quantity"); //toma el valor del input "quantity"
  let nombreDeUsuario = input.value;
  offset = nombreDeUsuario //variable declarada en un comienzo para guardar numero de offset y usarlo con cifrado
//---------------PASAR PAGINA 2 a 3---------------  
  sectionTwo.classList.remove("activo") //a sectionTwo "numero" se le quita la clase activo que ya tiene asignada en CSS(con ciertos valores)
  sectionThree.classList.add("activo") //a sectionThree "lista" se le añade la clase activo que esta en CSS como #lista.activo y se muestran los valores ingresados.
}

//---------------LISTA---------------
let boton = document.querySelector("#boton"),
  texto = document.querySelector("#valor"),
  lista = document.querySelector("#listaChilly"); //se declaran 3 variables que son los inputs(a traves de los ID)
boton.onclick = (e) => { //se le asigna un evento (e) onclick al boton
  let li = document.createElement("li"); // el evento crea un elemento de tipo "li"(lista dentro de un "ul"(unordered list))
  li.appendChild(document.createTextNode(texto.value)); //a "li" se le agrega un nuevo elemento de tipo texto con el valor de la variable text
  lista.appendChild(li); //a lista se le agrega "li"
  texto.value="" //se deja vacia la variable texto al crear un nuevo "li"
}

