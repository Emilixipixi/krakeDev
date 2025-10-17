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