jugar=function(){
    let aleatorio;
    let mensaje1="Ganaste";
    let mensaje2="Perdiste";
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){

        cambiarTexto("lblResultado",mensaje1);
    }else{
            cambiarTexto("lblResultado",mensaje2);
    }
}

//Crear una funcion llama lanzar dado 
//No recibe parametros
//Retorna u numero aleatorio ente 1-6
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    aleatorio=Math.random();//entre 0y 1
    numeroMultiplicado=(aleatorio*6)+1;
    numeroEntero=parseInt(numeroMultiplicado);
    return(numeroEntero);

}
