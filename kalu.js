//funcion que aplica el estilo a la opcion seleccionada en el menu cuando la pantalla esta pequeña

function seleccionar(link) {
  var opciones = document.querySelectorAll('#links  a');
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";
}

  //esto hace desaparecer el menú despues de haber seleccionado una opcion en el menú responsive
  var x = document.getElementById("nav");
  x.className = ""



// funcion que muestra el menu responsive
function responsiveMenu(){
  var x = document.getElementById("nav");
  if(x.className === ""){
    x.className = "responsive";
  }else{
    x.className = "";
  }
}

