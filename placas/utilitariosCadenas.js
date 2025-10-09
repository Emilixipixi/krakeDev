esMayuscula=function(caracter){
    let letra= caracter.charCodeAt();
    if (letra>=65 && letra<=90){
        return true;
    }
    return false;
}

esDigito=function(caracter){
    let numero=caracter.charCodeAt();
    if (numero>=48 && numero<=57){
        return true;
    }
    return false;
}

esGuion=function(caracter){
    let codigo=caracter.charCodeAt();
    if(codigo==45){
        return true;
    }
    return false;
}