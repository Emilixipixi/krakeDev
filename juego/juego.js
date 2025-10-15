let puntosUsuario=0;
let puntosComputador=0;
jugar=function(seleccionado){
    let resultado=generarElemento();
    let imagenSeleccionada=document.getElementById('imagenSeleccionada');
    imagenSeleccionada.src=generarRuta(seleccionado);
   let ganador=determinarGanador(seleccionado,resultado);
   if (ganador == 0) {
        mostrarTexto("lblResultado","EMPATE");
        
    } else if (ganador == 1) {
        mostrarTexto("lblResultado","GANASTE LA PARTIDA");
        puntosUsuario++
        mostrarTexto("puntosUsuario",puntosUsuario)
        if(puntosUsuario==5){
            alert("HAS GANADO EL JUEGO");
        }
    }else if(ganador==2){
        mostrarTexto("lblResultado","PERDISTE LA PARTIDA");
        puntosComputador++
        mostrarTexto("puntosComputador",puntosComputador);
        if(puntosComputador==5){
            alert("EL COMPUTADOR TE HA VENCIDO");

    }

}



}

limpiar=function(){
    puntosUsuario=0
    puntosComputador=0
     mostrarTexto("puntosUsuario",puntosUsuario);
      mostrarTexto("puntosComputador",puntosComputador);
}