import cipher from "./cipher.js";

//---------------PASO 1 A 2---------------
document.getElementById("namebtn")
        .addEventListener("click", function () {
    document.getElementById("nombre").hidden = true;
    document.getElementById("numero").hidden = false;
  }, false);

  //---------------GUARDAR NOMBRE---------------
  var guardarNombre = () => {
    let input = document.getElementById("nombretxt");
    nombreDeUsuario = input.value;
     let nombreUsuario = document.getElementById("nombre-usuario");
    nombreUsuario.innerHTML = nombreDeUsuario;
  }

//---------------GUARDAR NUMERO---------------
var guardarQuantity = () => {
  let input = document.getElementById("numero");
  nombreDeUsuario = input.value;
  let nombreUsuario = document.getElementById("nombre-usuario");
  nombreUsuario.innerHTML = nombreDeUsuario;
}

//---------------LISTA---------------
var boton = document.querySelector("#boton"),
  texto = document.querySelector("#valor"),
  lista = document.querySelector("#listaChilly");
boton.onclick = (e) => {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(texto.value));
  lista.appendChild(li);
};
