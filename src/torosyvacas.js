
class TorosYVacas{
    setClave(inclave) {
        if(this.validar(inclave)!="ok"){
            return this.validar(inclave);
        }
        return identificarBisontes(inclave);
    }
    identificarBisontes(clave){
        var bisontes="";
        for(var i=0; i<clave.length;i++){
            if(clave[i]=="2" || clave[i]=="3" || clave[i]=="5" ||clave[i]=="9")
            bisontes+="%";
        }
        return bisontes;
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
            return this.identificarToros(intento)+this.identificarVacas(intento)+this.identificarTerneros(intento);
        }
    }
    identificarToros(intento){
        var toros ="";
        for(var i=0;i<intento.length;i++){
            if(intento[i]==this.clave[i]){
                toros+="!";
            }
        }
        return toros;
    }
    identificarVacas(intento){
        var clave=[this.clave[0],this.clave[1],this.clave[2],this.clave[3]];
        var vacas ="";
        for(var i=0;i<intento.length;i++){
            for(var j=0;j<intento.length;j++){
                if(intento[i]==clave[j] && i!=j){
                    clave[j]="X";
                    vacas+="*";
                }
            }
        }
        return vacas;
    }
    identificarTerneros(intento){
        var terneros="";
        for(var i=0;i<intento.length;i++){       
            if(intento[i]==parseInt(this.clave[i])+1 || intento[i]==parseInt(this.clave[i])-1)
            terneros+="#";
        }
        return terneros;
    }
}
export default TorosYVacas;

