saludar=function(){

    let nombre=recuperarTexto("txtNombre");

    let apellido=recuperarTexto("txtApellido");

    let edad=recuperarInt("txtEdad");

    let estatura=recuperarFloat("txtEstatura");

    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido;

    mostrarTexto("lblResultado",mensajeBienvenida);

    mostrarImagen("imgSaludo","./imagenes/1.gif");

    mostrarTextoEnCaja("txtNombre","")
}
recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja)
    return valorEntero;
}

recuperarFloat=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorFlotante=parseFloat(valorCaja)
    return valorFlotante;
}

mostrarTexto=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente)
    componente.innerText=mensaje;
}

mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente)
    componente.value=mensaje;
}

mostrarImagen=function(idComponente,rutaImagen){
    let componente=document.getElementById(idComponente)
    componente.src =rutaImagen;
}