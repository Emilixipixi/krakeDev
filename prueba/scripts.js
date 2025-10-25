// Lista base de productos
const productos = [
  {
    nombre: "Camisa",
    descripcion: "Camisa blanca de algodón",
    categoria: "Ropa",
    precio: 25.99,
    stock: 50,
  },
  {
    nombre: "Pantalón",
    descripcion: "Pantalón azul jeans",
    categoria: "Ropa",
    precio: 40.0,
    stock: 30,
  },
  {
    nombre: "Zapatos",
    descripcion: "Zapatos deportivos",
    categoria: "Calzado",
    precio: 60.5,
    stock: 20,
  },
];

// Lista base de categorías
const categorias = [
  { nombre: "Ropa", descripcion: "Prendas de vestir" },
  { nombre: "Calzado", descripcion: "Zapatos, sandalias y más" },
];

const carrito = [
  { nombre: "Camisa", cantidad: 2, precio: 25.99 },
  { nombre: "Zapatos", cantidad: 1, precio: 60.5 },
];

const ventas = [
  {
    cliente: {
      nombre: "Juan Pérez",
      email: "juan.perez@example.com",
      telefono: "0991234567",
      direccion: "Av. Siempre Viva 123",
    },
    total: 112.48,
  },
  {
    cliente: {
      nombre: "María López",
      email: "maria.lopez@example.com",
      telefono: "0987654321",
      direccion: "Calle Falsa 456",
    },
    total: 40.0,
  },
];
// Función: agregar o actualizar producto
function agregarProducto() {
  /*
      - Obtener datos del producto desde inputs
      - Validar que todos los campos sean correctos
      - Si el producto existe (por nombre), actualizar datosxxxxxxxx
      - Si no existe, agregar producto a la lista
      - Limpiar campos y actualizar la tabla y estadísticas
    */


  mostrarTexto('txtNombre');
  let nombre = document.getElementById("txtNombre").value.trim();
  if (nombre === "") {
    mostrarTexto("lblMensajeNombre", "El nombre no puede estar vacío");
    return;
  } else {
    mostrarTexto("lblMensajeNombre", " ")
  }
  for (let i = 0; i < nombre.length; i++) {
    let letra = nombre[i];
    if (!((letra >= "A" && letra <= "Z") || (letra >= "a" && letra <= "z"))) {
      mostrarTexto("lblMensajeNombre", "El nombre solo puede tener letras");
      return;
    } else {
      mostrarTexto("lblMensajeNombre", " ")
    }
  }
  if (nombre[0] !== nombre[0].toUpperCase()) {
    mostrarTexto("lblMensajeNombre", "La primera letra del nombre debe ser mayúscula");
    return;
  } else {
    mostrarTexto("lblMensajeNombre", " ")
  }





 mostrarTexto('txtDescripcion');
const expresionRegular = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ]*$/;
let descripcion = document.getElementById("txtDescripcion").value.trim();

if (descripcion === "" || !expresionRegular.test(descripcion)) {
  mostrarTexto("lblMensajeDescripcion", "La descripción no puede quedar vacía ni contener caracteres especiales raros");
  return;
} else {
  mostrarTexto("lblMensajeDescripcion", " ");
}







  mostrarTexto('txtCategoria');
  let categoria = document.getElementById("txtCategoria").value.trim();
  if (categoria === "") {
    mostrarTexto("lblMensajeCategoria", "Debe ingresar una categoría");
    return;
  } else {
    mostrarTexto("lblMensajeCategoria", " ")
  }
  if (categoria[0] !== categoria[0].toUpperCase()) {
    mostrarTexto("lblMensajeCategoria", "La categoría debe empezar con mayúscula");
    return;
  } else {
    mostrarTexto("lblMensajeCategoria", " ")
  }
  if (categoria === "") {
    mostrarTexto("lblMensajeCategoria", "La categoria no puede estar vacío");
    return;
  } else {
    mostrarTexto("lblMensajeCategoria", " ")
  }






  mostrarTexto('txtPrecio');
  let precio = document.getElementById("txtPrecio").value.trim();
  if (precio === "" || isNaN(precio) || parseFloat(precio) < 0) {
    mostrarTexto("lblMensajePrecio", "Ingrese un precio válido (0 o más)");
    return;
  } else {
    mostrarTexto("lblMensajePrecio", " ")
  }
  precio = parseFloat(precio);




  mostrarTexto('txtStock');
  let stock = document.getElementById("txtStock").value.trim();
  if (stock === "" || isNaN(stock) || parseInt(stock) < 0 || !Number.isInteger(Number(stock))) {
    mostrarTexto("lblMensajeStock", "Ingrese un stock válido (entero, 0 o más).");
    return;
  }


  stock = parseInt(stock);




  let productoNuevo = buscarProducto(productos, nombre);
  if (productoNuevo) {
    productoNuevo.descripcion = descripcion;
    productoNuevo.categoria = categoria;
    productoNuevo.precio = precio;
    productoNuevo.stock = stock;
    mostrarTexto("Registro actualizado");
  } else {
    const nuevoProducto = { nombre, descripcion, categoria, precio, stock };

    productos.push(nuevoProducto);

    mostrarTexto("lblMensajeStock", "Producto agregado correctamente");
  }




  mostrarProductos();
  actualizarEstadisticasProductos();


  // Limpiar los inputs (opcional)
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtDescripcion").value = "";
  document.getElementById("txtCategoria").value = "";
  document.getElementById("txtPrecio").value = "";
  document.getElementById("txtStock").value = "";

 
}

buscarProducto = function (productos, nombre) {

  for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    if (producto.nombre == nombre) {
      return producto;
    }
  }
  return null;
}



// Función: mostrar productos en la tabla

function mostrarProductos() {
  /*
      - Limpiar contenido actual de la tabla
      - Recorrer lista de productos
      - Crear filas dinámicas con los datos y botón para eliminar
    */
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = ""; // Limpiamos la tabla antes de llenarla

  for (let i = 0; i < productos.length; i++) {
    const prod = productos[i];

    let fila = "<tr>" +
      "<td>" + prod.nombre + "</td>" +
      "<td>" + prod.descripcion + "</td>" +
      "<td>" + prod.categoria + "</td>" +
      "<td>" + prod.precio + "</td>" +
      "<td>" + prod.stock + "</td>" +
      "<td>" + (prod.precio * 1.12).toFixed(2) + "</td>"
    "</tr>";

    tbody.innerHTML += fila;
  }
}


// Mostrar la tabla al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  mostrarProductos();
  actualizarEstadisticasProductos();
});




// Función: eliminar producto por índice
function eliminarProducto(index) {

  /*
  // Función para eliminar un producto en la posición dada del array
  function eliminarProducto(index) {
    // El método splice modifica el array original eliminando elementos
    // El primer parámetro 'index' indica la posición donde empezar a eliminar
    // El segundo parámetro '1' indica que se elimina un solo elemento
    productos.splice(index, 1);
  }
  */

  /*
      - Confirmar acción con el usuario
      - Remover producto de la lista productos
      - Actualizar tabla y estadísticas
    */
  const nombre = document.getElementById("txtEliminarProducto").value.trim();
  if(nombre === ""){
        alert("Debes escribir el nombre del producto a eliminar.");
        return;
    }
    index = productos.findIndex(prod=>prod.nombre==nombre);
    if(index === -1){
        alert(`No se encontró ningún producto con el nombre "${nombre}".`);
        return;
    }
    const confirmar = confirm("¿Estás seguro de que quieres eliminar este producto?");
    if(confirmar){
        productos.splice(index, 1);
        mostrarProductos();
        actualizarEstadisticasProductos();
        alert("Producto eliminado correctamente.");
        // Limpiar input
        document.getElementById("txtEliminarProducto").value = "";
    }

    
}







// Función: actualizar estadísticas de productos
function actualizarEstadisticasProductos() {
  /*
      - Calcular y mostrar total productos, stock total y valor inventario
    */
   let total = productos.length;       // Total de productos
    let stockTotal = 0;                 // Total de stock
    let valorInventario = 0;            // Valor total del inventario

    for (let i = 0; i < productos.length; i++) {
        stockTotal += productos[i].stock;
        valorInventario += productos[i].precio * productos[i].stock;
    }

    document.getElementById("totalProductos").textContent = total;
    document.getElementById("stockTotal").textContent = stockTotal;
    document.getElementById("valorInventario").textContent = valorInventario.toFixed(2);
      
}


// Función: limpiar campos de producto
function limpiarCamposProducto() {
  /*
      - Limpiar inputs de producto para nueva entrada
    */
  mostrarTextoEnCaja('txtNombre', '');
  mostrarTextoEnCaja('txtDescripcion', '');
  mostrarTextoEnCaja('txtCategoria', '');
  mostrarTextoEnCaja('txtPrecio', '');
  mostrarTextoEnCaja('txtStock', '');
  mostrarTextoEnCaja('lblMensajeNombre', '');
  mostrarTextoEnCaja('lblMensajeDescripcion', '');
  mostrarTextoEnCaja('lblMensajeCategoria', '');
  mostrarTextoEnCaja('lblMensajePrecio', '');
  mostrarTextoEnCaja('lblMensajeStock', '');

}

// Función: agregar categoría
function agregarCategoria() {
  /*
      - Obtener datos desde inputs
      - Validar campos obligatorios y evitar duplicados
      - Agregar categoría a la lista
      - Limpiar campos y actualizar lista de categorías
    */
}

// Función: mostrar categorías
function mostrarCategorias() {
  /*
      - Limpiar lista actual
      - Recorrer categorías y mostrar en lista HTML
      - Agregar botón para eliminar categoría
    */
}

// Función: eliminar categoría
function eliminarCategoria(index) {
  /*
      - Confirmar con el usuario
      - Eliminar categoría de la lista
      - Actualizar lista en pantalla
    */
}

// Función: mostrar productos disponibles para añadir al carrito
function mostrarProductosDisponibles() {
  /*
      - Mostrar lista de productos con botón para añadir al carrito
    */
}

// Función: añadir producto al carrito
function agregarAlCarrito(nombreProducto) {
  /*
      - Validar cantidad y stock disponible
      - Añadir producto o aumentar cantidad en carrito
      - Actualizar resumen y total del carrito
    */
}

// Función: mostrar resumen del carrito
function mostrarCarrito() {
  /*
      - Mostrar tabla con productos en carrito, cantidades y subtotal
      - Mostrar total general
    */
}

// Función: editar cantidad de producto en carrito
function editarCantidadCarrito(index) {
  /*
      - Validar nueva cantidad contra stock
      - Actualizar cantidad en carrito
      - Actualizar tabla y total
    */
}

// Función: eliminar producto del carrito
function eliminarDelCarrito(index) {
  /*
      - Eliminar producto del carrito
      - Actualizar tabla y total
    */
}

// Función: guardar datos cliente
function guardarDatosCliente() {
  /*
      - Obtener y validar campos del cliente (nombre, email, teléfono, dirección)
      - Guardar datos para la compra
    */
}

// Función: finalizar compra
function finalizarCompra() {
  /*
      - Validar carrito y datos cliente completos
      - Crear registro de venta con productos, cliente, total y fecha
      - Actualizar stock de productos vendidos
      - Vaciar carrito
      - Actualizar tablas y estadísticas
      - Mostrar mensaje éxito y limpiar formulario cliente
    */
}

// Función: mostrar resumen de ventas
function mostrarVentas() {
  /*
      - Mostrar tabla con ventas registradas
      - Calcular y mostrar totales globales y producto más vendido
    */
}

// Función: calcular producto más vendido
function calcularProductoMasVendido() {
  /*
      - Contar cantidades vendidas de cada producto en todas las ventas
      - Retornar nombre de producto con mayor cantidad vendida
    */
}
