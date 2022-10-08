import TorosYVacas from "./TorosYVacas.js";
const toro = new TorosYVacas();
const codigo =document.getElementById("idcodigo");
const inicioForm = document.querySelector("#inicio-form");
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



