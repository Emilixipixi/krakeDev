calcularValorDescuento=function(monto,porcentajeDescuento){

    return(monto*porcentajeDescuento)/100;
}

calcularIVA=function(monto){
    return monto*0.12;
}

calcularSubtotal=function(precio,cantidad){
    return precio*cantidad;

}

calcularTotal = function(subtotal, descuento, iva) {
    let total = subtotal - descuento + iva;
    return total;
}


calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let porcentajeDescuento=0;
    
    if (cantidad>=3 && cantidad<=5){
        porcentajeDescuento = 0.03;
    }else if (cantidad>=6 && cantidad<=11){
        porcentajeDescuento=0.04;
    }else if (cantidad>=12){
        porcentajeDescuento=0.05;
    }
    let descuento=(subtotal*porcentajeDescuento);
    return descuento;
}

