calcularValorTotal=function(){

    
    let monto=recuperarInt("txtPrecio");

    let cantidad=recuperarFloat("txtCantidad");

    let porcentajeDescuento=recuperarFloat("txtPorcentajeDescuento");



    let subtotal = calcularSubtotal(monto, cantidad);
    
    let valorDescuento = calcularValorDescuento(subtotal, porcentajeDescuento);

    let totalConDescuento = subtotal - valorDescuento;

    let valorIva = calcularIVA(totalConDescuento);

    let total =calcularTotal(subtotal,valorDescuento,valorIva);



    mostrarTextoEnHTML("lblDescuento", valorDescuento);

    mostrarTextoEnHTML("lblTotal", totalConDescuento);

    mostrarTextoEnHTML("lblValorIVA",valorIva);
    
    mostrarTextoEnHTML("lblSubtotal",subtotal);

    mostrarTextoEnHTML("lblTotal",total);

    
}

recuperarFloat = function(idComponente){

    let valorCaja=recuperarTexto(idComponente);

    let valorEntero= parseFloat(valorCaja);

    return(valorEntero);
}

recuperarTexto=function(idComponente) {
    
    return document.getElementById(idComponente).value;
}


mostrarTextoEnHTML=function(idComponente, texto) {

    document.getElementById(idComponente).innerText = texto;
} 
    



limpiar = function () {
    
    document.getElementById("txtProducto").value = "";
    document.getElementById("txtPrecio").value = "0.0";
    document.getElementById("txtCantidad").value = "0";
    document.getElementById("txtPorcentajeDescuento").value = "0";

    
    document.getElementById("lblSubtotal").innerText = "0.0";
    document.getElementById("lblDescuento").innerText = "0.0";
    document.getElementById("lblValorIVA").innerText = "0.0";
    document.getElementById("lblTotal").innerText = "0.0";
    document.getElementById("lblResumen").innerText = "";
}


