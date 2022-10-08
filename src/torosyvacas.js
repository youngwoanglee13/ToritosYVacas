
class TorosYVacas{
     
    setClave(inclave) {
        if(isNaN(parseInt(inclave))){
            return "INGRESE SOLO NUMEROS";  
        }
        if(inclave.length!=4){
            return "INGRESE CLAVE DE 4 DIGITOS"; 
        }
        return "ok";
        //this.clave= inclave;
    }
    getClave() {
        return this.clave;
    }
    intentar(intento){
        return "";
    }
}
export default TorosYVacas;

