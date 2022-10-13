import TorosYVacas from "./TorosYVacas.js";
const toro = new TorosYVacas();
const codigo =document.getElementById("idcodigo");
const intento =document.getElementById("idintento");
const inicioForm = document.querySelector("#inicio-form");
const intentarForm = document.querySelector("#intentar-form");
document.getElementById("idintentar").disabled=true;
inicioForm.addEventListener("submit", (event) => {
  event.preventDefault();
  var clave=toro.setClave(codigo.value);
  if(clave.length<=4){
    document.getElementById("idintentar").disabled=false;
    document.getElementById("idiniciar").disabled=true;
    document.getElementById("idestado").innerHTML="<br>BISONTES:"+clave;
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