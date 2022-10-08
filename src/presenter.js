import TorosYVacas from "./TorosYVacas.js";
const toro = new TorosYVacas();
const codigo =document.getElementById("idcodigo");
const inicioForm = document.querySelector("#inicio-form");

inicioForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if(toro.setClave(codigo.value)=="ok"){
   
  }else{
    window.alert(toro.setClave(codigo.value));
  }
});



