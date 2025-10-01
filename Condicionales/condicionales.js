calcularTasaInteres=function(ingresoAnual){
    ingresoAnual=parseFloat(ingresoAnual);
    if(ingresoAnual<300000){
        return (16.0);
    }else if (ingresoAnual>=300000 && ingresoAnual<500000 ){
        return (15.0);
    }else if (ingresoAnual>=500000 && ingresoAnual<1000000 ){
        return (14.0);
    }else if (ingresoAnual>=1000000 && ingresoAnual<2000000 ){
        return (13.0);
    }else if (ingresoAnual>=2000000 ){
        return (12.0);
    }

}

calcularCapacidadPago=function(edad,ingresos,egresos){
    edad=parseInt(edad);
    ingresos=parseFloat(ingresos);
    egresos=parseFloat(egresos);
    let excedente=ingresos - egresos;

    if (excedente<=0){
        return (0.0);
    }
    if (edad>50){
        return excedente*0.30;
    }else {
        return excedente*0.40;
    }
}

calcularDescuento=function(precio, cantidad) {
    let descuento = 0;

    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        descuento = 0.02; 
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = 0.03; 
    } else if (cantidad >= 12) {
        descuento = 0.04; 
    }

    const valorFinal = precio - (precio * descuento);
    return valorFinal;
}


determinarColesterolLDL=function(nivelColesterol) {
    if (nivelColesterol < 100) {
        return "Óptimo";
    } else if (nivelColesterol >= 100 && nivelColesterol <= 129) {
        return "Cerca del óptimo";
    } else if (nivelColesterol >= 130 && nivelColesterol <= 159) {
        return "Elevado";
    } else if (nivelColesterol >= 160 && nivelColesterol <= 189) {
        return "Muy elevado";
    } else {
        return "Extremadamente elevado";
    }
}


validarClave=function(clave) {
    if (clave.length >= 8 && clave.length <= 16) {
        return true;
    }
    return false;
}


esMayuscula=function(caracter) {
    const codigoAscii = caracter.charCodeAt(0);
    return codigoAscii >= 65 && codigoAscii <= 90; 
}

esMinuscula=function(caracter) {
    const codigoAscii = caracter.charCodeAt(0);
    return (codigoAscii >= 97 && codigoAscii <= 122) || (codigoAscii >= 224 && codigoAscii <= 255); 
}


esDigito=function(caracter) {
    const codigoAscii = caracter.charCodeAt(0);
    return codigoAscii >= 48 && codigoAscii <= 57; 
}


darPermiso=function(notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
        return true;
    }
    return false;
}


otorgarPermiso=function(notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
        return true;
    }
    return false;
}


dejarSalir=function(notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && notaFisica > notaMatematica) {
        return true;
    }
    return false;
}
