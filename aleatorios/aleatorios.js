generarNumeroAleatorio=function() {
    return Math.floor(Math.random() * 100) + 1; 
}
 generarAleatorios=function() {
    // Obtener el valor del input del usuario
    const inputUsuario = document.getElementById("cantidad").value;
    const cantidad = parseInt(inputUsuario, 10);

    // Validar si el número está entre 5 y 20
    if (isNaN(cantidad) || cantidad < 5 || cantidad > 20) {
        alert("Por favor ingrese un numero entre 5 y 20.");
        return;
    }

    // Crear un arreglo vacío
    let aleatorios = [];

    // Llenar el arreglo con números aleatorios
    for (let i = 0; i < cantidad; i++) {
        console.log(i); // Imprimir el índice en consola
        let numeroAleatorio = generarNumeroAleatorio(); // Llamar la función que genera el número aleatorio
        aleatorios.push(numeroAleatorio); // Añadir el número aleatorio al arreglo
    }

    // Llamar a la función para mostrar los resultados
    mostrarResultados(aleatorios);
}

mostrarResultados=function(arregloNumeros){
    let cmpTabla = document.getElementById("divTabla"); // Contenedor donde se insertará la tabla
    let contenidoTabla = "<table '><tr><th>Numero Aleatorio</th></tr>"; // Inicio de tabla y encabezado

    // Recorrer el arreglo y crear filas dinámicamente
    for (let i = 0; i < arregloNumeros.length; i++) {
        contenidoTabla += "<tr><td>" + arregloNumeros[i] + "</td></tr>";
    }

    contenidoTabla += "</table>"; // Cerrar tabla
    cmpTabla.innerHTML = contenidoTabla; // Insertar la tabla en el contenedor
}
