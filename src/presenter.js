import TorosYVacas from "./TorosYVacas.js";
const toro = new TorosYVacas();
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
  }i
});
intentarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if(toro.intentar(intento.value)=="GANASTE"){
    document.getElementById("idintentar").disabled=true;
    document.getElementById("idestado").innerHTML="<br>Respuesta: GANASTE 4 TOROS";
  }else{
    window.alert(toro.intentar(intento.value));
  }i
});



