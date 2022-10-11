import setClave from "./torosyvacas.js";
const toro = new torosyvacas();
const codigo =document.getElementById("idcodigo");
const intento =document.getElementById("idintento");
const inicioForm = document.querySelector("#inicio-form");
const intentarForm = document.querySelector("#intentar-form");
document.getElementById("idintentar").disabled=true;
inicioForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if(toro.setClave(codigo.value)=="ok"){
    document.getElementById("idintentar").disabled=false;
    document.getElementById("idiniciar").disabled=true;
  }else{
    window.alert(toro.setClave(codigo.value));
  }
});

intentarForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  var respuesta=toro.intentar(intento.value);

  if(respuesta=="GANASTE"){
    document.getElementById("idintentar").disabled=true;
    document.getElementById("idestado").innerHTML="<br>Respuesta:"+respuesta;
  }
  if(respuesta.length>7){
    window.alert(respuesta);
  }
  else{
    document.getElementById("idestado").innerHTML="<br>Respuesta:"+respuesta;
  }
});