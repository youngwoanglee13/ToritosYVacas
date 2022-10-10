
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
    intentar(intento){
        if(intento.length==0){
            return "NECESITA INGRESAR UN INTENTO"; 
        } 
        if(isNaN(parseInt(intento))){
            return "INGRESE SOLO NUMEROS";  
        }
        if(intento.length!=4){
            return "INGRESE INTENTO DE 4 DIGITOS"; 
        }
        return "ok";
    }
}
export default TorosYVacas;

