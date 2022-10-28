var boton = document.getElementById("download");
var contador = 15;
var etiqueta = document.createElement("p");

etiqueta.innerHTML = "<b></b>";
var id;

boton.parentNode.replaceChild(etiqueta, boton);

function dowload(){
   this.style.display = "none";
   id = window.setInterval(function(){
      contador--;
      if(contador < 0){
         etiqueta.parentNode.replaceChild(boton, etiqueta);
         window.clearInterval(id);
      }
      else{
         etiqueta.innerHTML = + contador.toString() + "<b> seconds to download. </b>";
      }
   }, 1000)
}

var clickbtn = document.getElementById("botton");
clickbtn.onclick = dowload;