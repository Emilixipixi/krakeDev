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
      - Si el producto existe (por nombre), actualizar datos
      - Si no existe, agregar producto a la lista
      - Limpiar campos y actualizar la tabla y estadísticas
    */
   
}

// Función: mostrar productos en la tabla
function mostrarProductos() {
  /*
      - Limpiar contenido actual de la tabla
      - Recorrer lista de productos
      - Crear filas dinámicas con los datos y botón para eliminar
    */
}

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
}

// Función: actualizar estadísticas de productos
function actualizarEstadisticasProductos() {
  /*
      - Calcular y mostrar total productos, stock total y valor inventario
    */
}

// Función: limpiar campos de producto
function limpiarCamposProducto() {
  /*
      - Limpiar inputs de producto para nueva entrada
    */
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
