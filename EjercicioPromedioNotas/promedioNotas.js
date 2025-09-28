
calcularPromedioNotas=function(){
    
    let n1 = recuperarFlotante("txtN1");
    let n2 =recuperarFlotante("txtN2");
    let n3 =recuperarFlotante("txtN3");
    let promedio=calcularPromedio(n1,n2,n3);
    let resultadoFinal=promedio.toFixed(2);
    cmpResultadoE=document.getElementById("lblTotal");
    cmpResultadoE.innerHTML= resultadoFinal;

    if(resultadoFinal>0 && resultadoFinal<5){
    cmpimagenReprobado=document.getElementById("imgReprobado");
    cmpimagenReprobado.src="reprobado.gif";     

    }else if (resultadoFinal>=5 && resultadoFinal<=8){
         cmpimagenAprobado=document.getElementById("imgAprobado");
         cmpimagenAprobado.src="Aprobado.gif";
    }else if (resultadoFinal>8 && resultadoFinal<=10){
         cmpimagenExcelente=document.getElementById("imgExcelente");
         cmpimagenExcelente.src="excelente.gif";
    }else {
        cmpimagenDatosIncorrectos=document.getElementById("imgError")
        cmpimagenDatosIncorrectos.src="error.gif";
    }
    

}

