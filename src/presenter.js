import TorosYVacas from "./TorosYVacas.js";
const toro = new TorosYVacas();
//const comando = document.querySelector("#idcomandos");
const codigo =document.getElementById("idcodigo");
//const cD = new ejecutarComando();
//const form = document.querySelector("#simulador-form");
//const div = document.querySelector("#resultado-div");
const inicioForm = document.querySelector("#inicio-form");
//const intentarForm = document.querySelector("#intentar-form");
//document.getElementById("idiniciar").disabled=true;

document.getElementById("idintentar").disabled=true;

inicioForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if(toro.setClave(codigo.value)=="ok"){
   
  }else{
    window.alert(toro.setClave(codigo.value));
  }
});



