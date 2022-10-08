
class TorosYVacas{
    setClave(inclave) {
        if(inclave.length==0){
            return "NECESITA INGRESAR UNA CLAVE"; 
        } 
        if(isNaN(parseInt(inclave))){
            return "INGRESE SOLO NUMEROS";  
        }
        if(inclave.length!=4){
            return "INGRESE CLAVE DE 4 DIGITOS"; 
        }
        return "ok";
    }
    getClave() {
        return this.clave;
    }
    intentar(intento){
        return "";
    }
}
export default TorosYVacas;

