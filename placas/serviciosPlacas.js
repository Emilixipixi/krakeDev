 validarEstructura=function(placa) {
  const errores = [];

  if (placa.length != 7 && placa.length != 8) {
    errores.push("La placa debe tener 7 u 8 caracteres.");
  } else {
    if (!esMayuscula(placa[0])) errores.push("El primer caracter debe ser una letra mayúscula.");
    if (!esMayuscula(placa[1])) errores.push("El segundo caracter debe ser una letra mayúscula.");
    if (!esMayuscula(placa[2])) errores.push("El tercer caracter debe ser una letra mayúscula.");
    if (!esGuion(placa[3])) errores.push("El cuarto caracter debe ser un guion.");
    if (!esDigito(placa[4])) errores.push("El quinto caracter debe ser un dígito.");
    if (!esDigito(placa[5])) errores.push("El sexto caracter debe ser un dígito.");
    if (!esDigito(placa[6])) errores.push("El séptimo caracter debe ser un dígito.");
    if (placa.length == 8 && !esDigito(placa[7])) {
      errores.push("El octavo caracter debe ser un dígito.");
    }
  }

  if (errores.length > 0) {
    alert(errores.join("\n")); 
    return errores.join(" ");
  }

  return null;
}
obtenerProvincia=function(placa) {
   
    let letra = placa.charAt(0).toUpperCase();
    let provincias = {
        A: "Azuay",
        B: "Bolívar",
        C: "Carchi",
        P: "Pichincha",
        G: "Guayas"
    };

    
    if (provincias[letra]) {
        return provincias[letra];
    } else {
        return null;
    }
}

obtenerTipoVehiculo=function(placa) {
    
    let letra = placa.charAt(1).toUpperCase(); 
    let tipos = {
        A: "Vehículo comercial",
        P: "Vehículo particular",
        T: "Taxi",
        M: "Moto",
        
    };

  
    if (tipos[letra]) {
        return tipos[letra];
    } else {
        return null;
    }
}

obtenerDiaPicoYPlaca=function(placa) {

    let ultimoCaracter = placa.charAt(placa.length - 1);


    let diasPicoYPlaca = {
        "1": "Lunes",
        "2": "Lunes",
        "3": "Martes",
        "4": "Martes",
        "5": "Miércoles",
        "6": "Miércoles",
        "7": "Jueves",
        "8": "Jueves",
        "9": "Viernes",
        "0": "Viernes"
    };


    if (diasPicoYPlaca[ultimoCaracter]) {
        return diasPicoYPlaca[ultimoCaracter];
    } else {
        return null;
    }
}

limpiar=function() {
   
    document.getElementById("txtPlaca").value = "";
    document.getElementById("mensajeValidacion").innerText = "";
    document.getElementById("infoProvincia").innerText = "";
    document.getElementById("infoTipo").innerText = "";
    document.getElementById("infoDia").innerText = "";
}