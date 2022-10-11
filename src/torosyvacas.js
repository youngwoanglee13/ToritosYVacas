
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
        this.clave=inclave;
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
        if(intento==this.clave){
            return "GANASTE"
        }else{
            var clave=[this.clave[0],this.clave[1],this.clave[2],this.clave[3]];
            var res = "";
            for(var i=0;i<intento.length;i++){
                    if(intento[i]==clave[i]){
                        clave[i]="X";
                        res="!"+res;
                    }else{
                        if(intento[i]==parseInt(clave[i])+1 || intento[i]==parseInt(clave[i])-1){
                            res+="#";
                        }else{
                            for(var j=0;j<intento.length;j++){
                                if(intento[i]==clave[j]){
                                    clave[j]="X";
                                    res=res+"*";
                                }
                            }

                        }    
                        
                    }
            }
            return res;
        }
        
        return "ok";
    }
}
export default TorosYVacas;

