
class TorosYVacas{
    setClave(inclave) {
        if(this.validar(inclave)!="ok"){
            return this.validar(inclave);
        }
        this.clave=inclave;
    }
    validar(dato){
        if(dato.length==0){
            return "NECESITA INGRESAR UN NUMERO"; 
        } 
        if(isNaN(parseInt(dato))){
            return "INGRESE SOLO NUMEROS";  
        }
        if(dato.length!=4){
            return "INGRESE UN NUMERO DE 4 DIGITOS"; 
        }
        return "ok";   
    }
    intentar(intento){
        if(this.validar(intento)!="ok"){
            return this.validar(intento);
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
                        if(intento[i]==parseInt(clave[i])+1){
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

