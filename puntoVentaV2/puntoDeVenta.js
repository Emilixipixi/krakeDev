esProductoValido = function (nombreProducto) {
    if (nombreProducto.length > 10 || nombreProducto.length == 0) {
        mostrarTexto("lblError1", "CAMPO OBLIGATORIO: El nombre no puede tener mas de 10 caracteres");
        return false;
    }
    mostrarTexto("lblError1", ""); 
    return true;
}

esCantidadValida = function (cantidad) {
    if (isNaN(cantidad) || cantidad < 0 || cantidad > 100 || cantidad.length == 0) {
        mostrarTexto("lblError2", "CAMPO OBLIGATORIO: La cantidad debe ser un numero entero entre 0 y 100");
        return false;
    }
   
    if (parseInt(cantidad) !== parseFloat(cantidad)) {
        mostrarTexto("lblError2", "CAMPO OBLIGATORIO: La cantidad debe ser un numero entero entre 0 y 100");
        return false;
    }
    mostrarTexto("lblError2", ""); 
    return true;
}

esPrecioValido = function (precio) {
    if (isNaN(precio) || precio < 0 || precio > 50 || precio.length == 0) {
        mostrarTexto("lblError3", "CAMPO OBLIGATORIO: El precio debe ser un numero entre 0 y 50");
        return false;
    }
    mostrarTexto("lblError3", ""); 
    return true;
}


calcularValorTotal = function () {
    
    let nombreProducto = recuperarTexto("txtProducto");
    let cantidadTexto = recuperarTexto("txtCantidad");
    let precioTexto = recuperarTexto("txtPrecio");

    
    let productoOK = esProductoValido(nombreProducto);
    let cantidadOK = esCantidadValida(cantidadTexto);
    let precioOK = esPrecioValido(precioTexto);

    
    if (!productoOK || !cantidadOK || !precioOK) {
        return;
    }
    
    
    let precio = recuperarFloat("txtPrecio");
    let cantidad = recuperarFloat("txtCantidad");

   

    let subtotal = calcularSubtotal(precio, cantidad);

    
    let valorDescuento = calcularDescuentoPorVolumen(subtotal, cantidad);

    let totalConDescuento = subtotal - valorDescuento;

    let valorIva = calcularIVA(totalConDescuento);

    let total = calcularTotal(subtotal, valorDescuento, valorIva); 
   
    mostrarTexto("lblSubtotal", subtotal.toFixed(2));
    mostrarTexto("lblDescuento", valorDescuento.toFixed(2));
    mostrarTexto("lblValorIVA", valorIva.toFixed(2));
    mostrarTexto("lblTotal", total.toFixed(2)); 
}

limpiar = function () {
   
    document.getElementById("txtProducto").value = "";
    document.getElementById("txtPrecio").value = "0.0";
    document.getElementById("txtCantidad").value = "0";
    

  
    document.getElementById("lblSubtotal").innerText = "0.0";
    document.getElementById("lblDescuento").innerText = "0.0";
    document.getElementById("lblValorIVA").innerText = "0.0";
    document.getElementById("lblTotal").innerText = "0.0";
    document.getElementById("lblResumen").innerText = "";
    
   
    mostrarTexto("lblError1", "");
    mostrarTexto("lblError2", "");
    mostrarTexto("lblError3", "");
}