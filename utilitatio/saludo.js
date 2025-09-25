saludar=function(){

    let nombre;
    nombre=recuperarTexto("txtNombre");

    let apellido=recuperarTexto("txtApellido");
}
recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}