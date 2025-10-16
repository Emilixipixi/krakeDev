validarPassword=function(password){
    let mensajeError="";

    if (password.legth<8){
        mensajeError+="Debe tener al menos 8 caracteres\n";
    }
    if (password.legth>18){
        mensajeError+="Debe tener MAXIMO 16 caracteres\n";
    }

    let tieneMayuscula=false;
    for (let i=0;i<password.legth;i++){
        let caracter= password.charAt(i);
        if (caracter>= "A"&&caracter<="Z"){
            tieneMayuscula=true;
        }
    }
    if(!tieneMayuscula){
        mensajeError+="Debe al menos tener una letra Mayuscula\n";
    }


    let tieneDigito=false;
    for(let i=0;i<password.legth;i++){
        let caracter=password.charAt(i);
        if (caracter>=0 && caracter<=9){
            tieneDigito=true;
        }
    }
    if (!tieneDigito){
        mensajeError += "Debe tener almenos un digito\n";
    }

    let tieneEspecial = false;
    for (let i = 0; i < password.length; i++) {
        let caracter = password.charAt(i);
        if (caracter === '*' || caracter === '-' || caracter === '_') {
            tieneEspecial = true;
        }
     if (!tieneEspecial) {
        mensajeError += "Debe tener al menos un caracter especial (*, - o _)\n";
    }

    return mensajeError;
    }

}
ejecutarValidacion=function(){
     let password = document.getElementById("txtPassword").value;
    let resultado = validarPassword(password);

    if (resultado === "") {
        mostrarTexto("lblResultado", "Password correcto");
    } else {
        mostrarTexto("lblResultado", resultado);
    }
}
