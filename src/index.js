import cipher from './cipher.js';


  document.getElementById("nameButton")
        .addEventListener("click", function() {
    /*GUARDAR NOMBRE*/
    document.querySelector("#nombre-usuario").innerHTML = document.getElementById("nombre").value;
  document.getElementById("nombreblah").hidden = true;
  document.getElementById("offset").hidden = false;
}, false);


  /*LISTA*/
    var boton = document.querySelector("#boton"),
    texto = document.querySelector("#valor"),
    lista = document.querySelector("#listaChilly");
    boton.onclick = (e) => {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(texto.value));
      lista.appendChild(li);
    }