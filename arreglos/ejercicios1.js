let notas=[];

agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo=function(){
    let notasR;
    for(let indice=0;indice<notas.length;indice++){
       notasR= notas[indice];
       console.log(notasR);
    }
}

probarAgregar=function(){
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota=function(nota){
    notas.push(nota);
    mostrarNotas();
}

calcularPromedio = function() {
    let sumaNotas = 0;
    let promedio;

    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }

    promedio = sumaNotas / notas.length;
    return promedio;
}


ejecutarPromedio=function(){
    let promedioFinal=calcularPromedio();
    document.getElementById("lblResultado").innerText =promedioFinal;

}

generarTabla=function(){
    let contenidoTabla="";
    let cmpTabla=document.getElementById("divTabla");
    contenidoTabla+="<table><tr><td>UNO</td></tr></table>"+"<tr><td>DOS</td></tr>";
    cmpTabla.innerHTML=contenidoTabla;
}

mostrarNotas=function(){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NOTA</th></tr>";
    let miNota;
    for (let i=0;i<notas.length;i++){
        miNota=notas[i];
        contenidoTabla+="<tr><td>"
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}