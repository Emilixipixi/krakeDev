generarElemento=function(){
    let aleatorio;
    let mensaje1="PIEDRA";
    let mensaje2="PAPEL";
    let mensaje3="TIJERA";
    aleatorio=obtenerAleatorio();
   
    if(aleatorio==1){
       return mensaje1;
    }else if(aleatorio==2){
        return mensaje2;
    }else{
        return mensaje3;
    }
}
obtenerAleatorio=function(){
    return Math.floor(Math.random()*3)+1;
}
determinarGanador=function(eleccionJugador1,eleccionJugador2){
    if (eleccionJugador1==eleccionJugador2){
        return 0;
        }else if(
            (eleccionJugador1=="PIEDRA"&& eleccionJugador2=="TIJERA")||
            (eleccionJugador1=="PAPEL"&& eleccionJugador2=="PIEDRA")||
            (eleccionJugador1=="TIJERA"&& eleccionJugador2=="PAPEL")
        ){
            return 1;
        }else{
            return 2;
        }
            
        
    }
generarRuta = function(nombre){ 
    if (nombre == "PIEDRA"){ 
        
        return "./imagenes/piedra.jpg"; 
    } else if (nombre == "PAPEL"){ 
        return "./imagenes/papel.jpg";
    } else if (nombre == "TIJERA"){ 
        return "./imagenes/tijera.jpg"; 
    }
}
