let empleados = [
    {cedula:"1714616123",nombre:"JOHN",apellido:"CENA",sueldo:500.0},
    {cedula:"0914632123",nombre:"LUISA",apellido:"GONZALEZ",sueldo:900.0},
    {cedula:"1102457890", nombre: "CARLOS", apellido: "RAMIREZ", sueldo: 750.0}
]

let roles = [] 

let esNuevo = false; 

mostrarOpcionEmpleado=function(){
    deshabilitarComponentesEmpleado(); 
    mostrarComponente('divEmpleado');
    ocultarComponente('divRol');
    ocultarComponente('divResumen');
    mostrarEmpleados();
}

mostrarOpcionRol=function(){
    deshabilitarComponente('btnGuardarRol'); 
    mostrarComponente('divRol');
    ocultarComponente('divEmpleado');
    ocultarComponente('divResumen');
}

mostrarOpcionResumen=function(){
    mostrarComponente('divResumen');
    ocultarComponente('divRol');
    ocultarComponente('divEmpleado');
    mostrarRoles();
    mostrarTotales();
}

mostrarEmpleados=function() {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table border='1'>" +
        "<tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
        
    for (let i = 0; i < empleados.length; i++) {
        let emp = empleados[i];
        contenidoTabla += "<tr>" +
            "<td>" + emp.cedula + "</td>" +
            "<td>" + emp.nombre + "</td>" +
            "<td>" + emp.apellido + "</td>" +
            "<td>" + emp.sueldo.toFixed(2) + "</td>" +
            "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

deshabilitarComponentesEmpleado = function() {
    deshabilitarComponente('txtCedula'); 
    deshabilitarComponente('txtNombre');
    deshabilitarComponente('txtApellido');
    deshabilitarComponente('txtSueldo');
    deshabilitarComponente('btnGuardar'); 
}

habilitarComponentesEmpleado = function() {
    habilitarComponente('txtCedula'); 
    habilitarComponente('txtNombre');
    habilitarComponente('txtApellido');
    habilitarComponente('txtSueldo');
    habilitarComponente('btnGuardar'); 
}

limpiar = function() {
    mostrarTextoEnCaja('txtCedula', '');
    mostrarTextoEnCaja('txtNombre', '');
    mostrarTextoEnCaja('txtApellido', '');
    mostrarTextoEnCaja('txtSueldo', '');
    mostrarTexto('lblErrorCedula', '');
    mostrarTexto('lblErrorNombre', '');
    mostrarTexto('lblErrorApellido', '');
    mostrarTexto('lblErrorSueldo', '');
    mostrarTexto('lblErrorBusqueda', '');
    esNuevo = false;
    deshabilitarComponentesEmpleado();
    habilitarComponente('txtBusquedaCedula');
}

buscarEmpleado = function(cedula) {
    for (let i = 0; i < empleados.length; i++) {
        let emp = empleados[i];
        if (emp.cedula === cedula) {
            return emp; 
        }
    }
    return null; 
}

agregarEmpleado = function(empleado) {
    let existe = buscarEmpleado(empleado.cedula); 
    if (existe) {
        return false; 
    } else {
        empleados.push(empleado); 
        return true; 
    }
}

modificarEmpleado = function(empleado) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === empleado.cedula) {
            empleados[i].nombre = empleado.nombre;
            empleados[i].apellido = empleado.apellido;
            empleados[i].sueldo = empleado.sueldo;
            return true;
        }
    }
    return false;
}

ejecutarNuevo = function() { 
    limpiar();
    habilitarComponentesEmpleado(); 
    esNuevo = true; 
    deshabilitarComponente('txtBusquedaCedula');
}

ejecutarBusqueda = function() {
    limpiar(); 
    deshabilitarComponentesEmpleado(); 
    habilitarComponente('txtBusquedaCedula');
    
    let cedulaBusqueda = recuperarTexto('txtBusquedaCedula');
    let empleadoEncontrado = buscarEmpleado(cedulaBusqueda);
    
    if (empleadoEncontrado === null) {
        alert("EMPLEADO NO EXISTE");
        mostrarTexto('lblErrorBusqueda', 'EMPLEADO NO EXISTE');
        return;
    }
    
    mostrarTextoEnCaja('txtCedula', empleadoEncontrado.cedula);
    mostrarTextoEnCaja('txtNombre', empleadoEncontrado.nombre);
    mostrarTextoEnCaja('txtApellido', empleadoEncontrado.apellido);
    mostrarTextoEnCaja('txtSueldo', empleadoEncontrado.sueldo);

    habilitarComponente('txtNombre');
    habilitarComponente('txtApellido');
    habilitarComponente('txtSueldo');
    deshabilitarComponente('txtCedula');
    habilitarComponente('btnGuardar');
    esNuevo = false;
}

guardar = function() {
    let cedula = recuperarTexto('txtCedula');
    let nombre = recuperarTexto('txtNombre');
    let apellido = recuperarTexto('txtApellido');
    let sueldoTexto = recuperarTexto('txtSueldo');
    let sueldo = recuperarFloat('txtSueldo');

    mostrarTexto('lblErrorCedula', '');
    mostrarTexto('lblErrorNombre', '');
    mostrarTexto('lblErrorApellido', '');
    mostrarTexto('lblErrorSueldo', '');

    let hayErrores = false;
    
    if (cedula.length !== 10 || isNaN(cedula)) {
        mostrarTexto('lblErrorCedula', 'DEBE TENER 10 DÍGITOS');
        hayErrores = true;
    }

    if (nombre.length < 3 || nombre !== nombre.toUpperCase() || /[0-9]/.test(nombre) || nombre.trim() === '') {
        mostrarTexto('lblErrorNombre', 'AL MENOS 3 CARACTERES, TODOS MAYÚSCULAS');
        hayErrores = true;
    }

    if (apellido.length < 3 || apellido !== apellido.toUpperCase() || /[0-9]/.test(apellido) || apellido.trim() === '') {
        mostrarTexto('lblErrorApellido', 'AL MENOS 3 CARACTERES, TODOS MAYÚSCULAS');
        hayErrores = true;
    }
    
    if (sueldoTexto.trim() === '') { 
        mostrarTexto('lblErrorSueldo', 'CAMPO OBLIGATORIO');
        hayErrores = true;
    } else if (isNaN(sueldo)) { 
        mostrarTexto('lblErrorSueldo', 'DEBE SER UN NÚMERO FLOTANTE');
        hayErrores = true;
    } else if (sueldo < 400 || sueldo > 5000) {
        mostrarTexto('lblErrorSueldo', 'ENTRE 400 Y 5000 INCLUIDOS');
        hayErrores = true;
    }

    if (hayErrores) {
        return; 
    }

    let empleadoAGuardar = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        sueldo: sueldo
    };

    if (esNuevo) { 
        let agregado = agregarEmpleado(empleadoAGuardar); 
        
        if (agregado) { 
            alert("EMPLEADO GUARDADO CORRECTAMENTE"); 
            mostrarEmpleados(); 
            deshabilitarComponentesEmpleado(); 
            esNuevo = false; 
        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CÉDULA " + cedula); 
        }
    } else { 
        let empleadoEncontrado = buscarEmpleado(cedula);
        
        if (empleadoEncontrado) {
            modificarEmpleado(empleadoAGuardar); 
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleados();
            deshabilitarComponentesEmpleado();
            esNuevo = false; 
        } else {
            alert("ERROR: EMPLEADO NO ENCONTRADO PARA MODIFICAR.");
        }
    }
}


buscarPorRol = function() {
    let cedula = recuperarTexto('txtBusquedaCedulaRol');
    let empleado = buscarEmpleado(cedula);

    mostrarTexto('infoCedula', '');
    mostrarTexto('infoNombre', '');
    mostrarTexto('infoSueldo', '');
    mostrarTextoEnCaja('txtDescuentos', '');
    mostrarTexto('lblErrorDescuentos', '');
    mostrarTexto('infoIESS', '0.0');
    mostrarTexto('infoPago', '0.0');
    deshabilitarComponente('btnGuardarRol');

    if (empleado) {
        mostrarTexto('infoCedula', empleado.cedula);
        mostrarTexto('infoSueldo', empleado.sueldo.toFixed(2));
        let nombreCompleto = empleado.nombre + " " + empleado.apellido;
        mostrarTexto('infoNombre', nombreCompleto);
    } else {
        alert("EMPLEADO NO EXISTE");
    }
}

calcularAporteEmpleado = function(sueldo) {
    const PORCENTAJE_IESS = 0.0945; 
    return sueldo * PORCENTAJE_IESS;
}

calcularAporteEmpleador = function(sueldo) {
    const PORCENTAJE_IESS_EMPRESA = 0.1115; 
    return sueldo * PORCENTAJE_IESS_EMPRESA;
}

calcularValorAPagar = function(sueldo, aporteIESS, descuento) {
    return sueldo - aporteIESS - descuento;
}

calcularRol = function() {
    mostrarTexto('lblErrorDescuentos', '');

    let sueldo = recuperarFloatDiv('infoSueldo');
    let descuentos = recuperarFloat('txtDescuentos');
    let descuentosTexto = recuperarTexto('txtDescuentos');

    if (isNaN(sueldo) || sueldo <= 0) {
        alert("Primero debe buscar y cargar un empleado.");
        deshabilitarComponente('btnGuardarRol');
        return;
    }
    
    let hayErrores = false;

    if (descuentosTexto.trim() === '') {
        mostrarTexto('lblErrorDescuentos', 'CAMPO OBLIGATORIO');
        hayErrores = true;
    } else if (isNaN(descuentos)) { 
        mostrarTexto('lblErrorDescuentos', 'DEBE SER UN NÚMERO FLOTANTE');
        hayErrores = true;
    } else if (descuentos < 0 || descuentos > sueldo) {
        mostrarTexto('lblErrorDescuentos', `ENTRE 0 Y ${sueldo.toFixed(2)} INCLUIDOS`);
        hayErrores = true;
    }

    if (hayErrores) {
        mostrarTexto('infoIESS', '0.0');
        mostrarTexto('infoPago', '0.0');
        deshabilitarComponente('btnGuardarRol');
        return;
    }

    let aporteIESS = calcularAporteEmpleado(sueldo);
    mostrarTexto('infoIESS', aporteIESS.toFixed(2));

    let valorAPagar = calcularValorAPagar(sueldo, aporteIESS, descuentos);
    mostrarTexto('infoPago', valorAPagar.toFixed(2));
    
    habilitarComponente('btnGuardarRol');
}

buscarRol = function(cedula) {
    for (let i = 0; i < roles.length; i++) {
        let rol = roles[i];
        if (rol.cedula === cedula) {
            return rol; 
        }
    }
    return null; 
}

agregarRol = function(rol) {
    let existe = buscarRol(rol.cedula);
    if (existe) {
        alert("ERROR: Ya existe un rol de pago para esta cédula.");
    } else {
        roles.push(rol);
        alert("ROL GUARDADO EXITOSAMENTE");
    }
}

guardarRol = function() {
    let cedula = recuperarTextoDiv('infoCedula');
    let nombre = recuperarTextoDiv('infoNombre');
    let sueldo = recuperarFloatDiv('infoSueldo');
    let valorAPagar = recuperarFloatDiv('infoPago');
    let aporteEmpleado = recuperarFloatDiv('infoIESS');
    
    if (cedula.trim() === "") {
        alert("Debe buscar un empleado y calcular el rol antes de guardar.");
        return;
    }

    let aporteEmpleador = calcularAporteEmpleador(sueldo); 

    let rolAGuardar = {
        cedula: cedula,
        nombre: nombre,
        sueldo: sueldo,
        valorAPagar: valorAPagar,
        aporteEmpleado: aporteEmpleado,
        aporteEmpleador: aporteEmpleador
    };

    agregarRol(rolAGuardar);
    deshabilitarComponente('btnGuardarRol');
}




mostrarRoles = function() {
    let cmpTabla = document.getElementById("tablaResumen");

    let contenidoTabla = "<table border='1'>" +
        "<tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>VALOR A PAGAR</th>" +
        "<th>APORTE EMPLEADO</th>" +
        "<th>APORTE EMPLEADOR</th>" +
        "</tr>";
        
    for (let i = 0; i < roles.length; i++) {
        let rol = roles[i];
        contenidoTabla += "<tr>" +
            "<td>" + rol.cedula + "</td>" +
            "<td>" + rol.nombre + "</td>" +
            "<td>" + rol.valorAPagar.toFixed(2) + "</td>" +
            "<td>" + rol.aporteEmpleado.toFixed(2) + "</td>" +
            "<td>" + rol.aporteEmpleador.toFixed(2) + "</td>" +
            "</tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarTotales = function() {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;

    for (let i = 0; i < roles.length; i++) {
        let rol = roles[i];
        totalEmpleado += rol.aporteEmpleado;
        totalEmpleador += rol.aporteEmpleador;
        totalAPagar += rol.valorAPagar;
    }

    let totalNomina = totalEmpleado + totalEmpleador + totalAPagar; 
    
    mostrarTexto('infoTotalPago', totalAPagar.toFixed(2));
    mostrarTexto('infoAporteEmpresa', totalEmpleador.toFixed(2));
    mostrarTexto('infoAporteEmpleado', totalEmpleado.toFixed(2));
    
    mostrarTexto('infoTotalNomina', totalNomina.toFixed(2));
}