//import TorosYVacas from "./TorosYVacas";
//const comando = document.querySelector("#idcomandos");
const codigo =document.getElementById("idcodigo");
//const cD = new ejecutarComando();
//const form = document.querySelector("#simulador-form");
//const div = document.querySelector("#resultado-div");
const inicioForm = document.querySelector("#inicio-form");


inicioForm.addEventListener("submit", (event) => {
  event.preventDefault();
 // window.alert(codigo.value);
  if(isNaN(parseInt(codigo.value))){
    window.alert("INGRESE SOLO NUMEROS");
    
  }
  //inicioForm.innerHTML = "";
});

//<input type="text" id="idintento" />
