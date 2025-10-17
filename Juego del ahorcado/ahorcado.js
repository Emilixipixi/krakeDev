let palabraSecreta = "";
let letrasEncontradas = 0;
let intentos = 0;
let errores = 0;   

// Función para verificar si la letra es mayúscula
esMayuscula = function(caracter) {
    let letraMayuscula = caracter.charCodeAt(0);
    return letraMayuscula >= 65 && letraMayuscula <= 90;
}

// Guardar palabra secreta y reiniciar el juego
guardarPalabra = function() {
    let palabra = document.getElementById("txtSecreta").value;
    
    if (palabra.length !== 5) {
        alert("Debe ingresar una palabra de 5 letras mayúsculas");
        return;
    }

    for (let i = 0; i < palabra.length; i++) {
        if (!esMayuscula(palabra[i])) {
            alert("Debe ingresar una palabra de 5 letras mayúsculas");
            return;
        }
    }

    palabraSecreta = palabra;
    letrasEncontradas = 0;
    intentos = 0;
    errores = 0;
    mostrarAhorcado();  
    console.log("Palabra ingresada: ", palabraSecreta);
    
    // Mostrar guiones bajos para las letras
    for (let i = 0; i < 5; i++) {
        mostrarLetra("_", i);
    }
}

// Mostrar la letra en el lugar correcto
function mostrarLetra(letra, posicion) {
    let divs = ["div0", "div1", "div2", "div3", "div4"];
    if (posicion >= 0 && posicion < divs.length) {
        document.getElementById(divs[posicion]).innerText = letra;
    }
}

// Validar la letra ingresada
function validar(letra) {
    let letraEncontrada = false;
    let coincidenciasEnLaPalabra = 0;

    // Verificamos cuántas veces aparece la letra en la palabra secreta
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            mostrarLetra(letra, i);  // Muestra la letra en la posición correspondiente
            coincidenciasEnLaPalabra++;  // Contamos la aparición de la letra
            letraEncontrada = true;
        }
    }

    // Incrementamos 'letrasEncontradas' por la cantidad de veces que la letra aparece
    letrasEncontradas += coincidenciasEnLaPalabra;

    // Mostrar en consola las letras encontradas para depurar
    console.log("Letras encontradas: " + letrasEncontradas);  // Esto debe ser ahora acumulativo

    if (coincidenciasEnLaPalabra === 0) {
        errores++;
        mostrarAhorcado();
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
    }

    intentos++;

    // Verificamos si hemos ganado (5 letras encontradas)
    if (letrasEncontradas === 5) {
        alert("HA GANADO");
        document.getElementById('ahorcadoImagen').src = 'imagenes/ganador.gif';
        
        setTimeout(() => {
            // Permitir reiniciar el juego después de 2 segundos
            palabraSecreta = "";
            letrasEncontradas = 0;
            intentos = 0;
            errores = 0;
            mostrarAhorcado();
            for (let i = 0; i < 5; i++) {
                mostrarLetra("_", i);
            }
        }, 5000); // Esperar 5 segundos para mostrar la animación de victoria
        return;
    }

    // Verificar si el juego ha terminado (10 errores)
    if (errores === 9) {
        alert("HA PERDIDO");
        document.getElementById('ahorcadoImagen').src = 'imagenes/gameOver.gif'; // Game Over
        return;
    }
}


// Función para ingresar la letra
ingresarLetra = function() {
    let letra = document.getElementById('txtLetra').value;

    if (letra === letra.toUpperCase() && letra !== "") {
        validar(letra);
        document.getElementById('txtLetra').value = ''; // Limpiar campo de letra
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}

// Función para mostrar la imagen del ahorcado dependiendo de los errores
function mostrarAhorcado() {
    // Array con las rutas de las imágenes para cada cantidad de errores
    const imagenes = [
        'imagenes/ahorcado_01.png', // No errors (error 0)
        'imagenes/ahorcado_02.png', // 1 error
        'imagenes/ahorcado_03.png', // 2 errors
        'imagenes/ahorcado_04.png', // 3 errors
        'imagenes/ahorcado_05.png', // 4 errors
        'imagenes/ahorcado_06.png', // 5 errors
        'imagenes/ahorcado_07.png', // 6 errors
        'imagenes/ahorcado_08.png', // 7 errors
        'imagenes/ahorcado_09.png', // 8 errors
    ];

    // Asegúrate de que los errores estén dentro del rango de 0 a 9
    if (errores >= 0 && errores <= 9) {
        // Actualiza la imagen según el número de errores
        document.getElementById('ahorcadoImagen').src = imagenes[errores];
    } 
}

