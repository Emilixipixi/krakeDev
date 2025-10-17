let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1102457890", nombre: "Carlos", apellido: "Ramirez", sueldo: 750.0}
]
mostrarOpcionEmpleado=function(){
    
    mostrarComponente('divEmpleado');
    ocultarComponente('divRol');
    ocultarComponente('divResumen');
    mostrarEmpleados();
}

mostrarOpcionRol=function(){
    
    mostrarComponente('divRol');
    ocultarComponente('divEmpleado');
    ocultarComponente('divResumen');
}

mostrarOpcionResumen=function(){
    
    mostrarComponente('divResumen');
    ocultarComponente('divRol');
    ocultarComponente('divEmpleado');
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
            "<td>" + emp.sueldo + "</td>" +
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


ejecutarNuevo = function() { 
    habilitarComponentesEmpleado(); 
    esNuevo = true; 
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

   
    if (nombre.length < 3 || nombre !== nombre.toUpperCase() || /[0-9]/.test(nombre)) {
        mostrarTexto('lblErrorNombre', 'AL MENOS 3 CARACTERES, TODOS MAYÚSCULAS'); 
        hayErrores = true;
    }

   
    if (apellido.length < 3 || apellido !== apellido.toUpperCase() || /[0-9]/.test(apellido)) {
        mostrarTexto('lblErrorApellido', 'AL MENOS 3 CARACTERES, TODOS MAYÚSCULAS'); 
        hayErrores = true;
    }

    
    if (isNaN(sueldo)) { 
        mostrarTexto('lblErrorSueldo', 'DEBE SER UN NÚMERO FLOTANTE');
        hayErrores = true;
    } else if (sueldo < 400 || sueldo > 5000) {
        mostrarTexto('lblErrorSueldo', 'ENTRE 400 Y 5000 INCLUIDOS'); 
        hayErrores = true;
    }

   
    if (cedula.trim() === '' || nombre.trim() === '' || apellido.trim() === '' || sueldoTexto.trim() === '') {
    }

    if (hayErrores) {
        return; 
    }

   
    if (esNuevo) {
        let nuevoEmpleado = {}; 
        nuevoEmpleado.cedula = cedula;
        nuevoEmpleado.nombre = nombre;
        nuevoEmpleado.apellido = apellido;
        nuevoEmpleado.sueldo = sueldo; 

        let agregado = agregarEmpleado(nuevoEmpleado); 
        
        if (agregado) { 
            alert("EMPLEADO GUARDADO CORRECTAMENTE"); 
            mostrarEmpleados(); 
            deshabilitarComponentesEmpleado(); 
        } else {
            
            alert("YA EXISTE UN EMPLEADO CON LA CÉDULA " + cedula); 
        }
    }
}