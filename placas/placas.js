function validarPlaca() {
    let placa = document.getElementById("txtPlaca").value;

    let erroresEstructura = validarEstructura(placa);

    let mensaje = document.getElementById("mensajeValidacion");
    let infoProvincia = document.getElementById("infoProvincia");
    let infoTipo = document.getElementById("infoTipo");
    let infoDia = document.getElementById("infoDia");

    if (erroresEstructura == null) {
        mensaje.innerText = "ESTRUCTURA VALIDA";

        let provincia = obtenerProvincia(placa);
        if (provincia != null) {
            infoProvincia.innerText = "Provincia: " + provincia;
        } else {
            infoProvincia.innerText = "Provincia incorrecta";
        }

        let tipo = obtenerTipoVehiculo(placa);
        if (tipo != null) {
            infoTipo.innerText = "Tipo de Vehículo: " + tipo;
        } else {
            infoTipo.innerText = "Tipo de vehículo incorrecto";
        }

        let dia = obtenerDiaPicoYPlaca(placa);
        if (dia != null) {
            infoDia.innerText = "Día de pico y placa: " + dia;
        } else {
            infoDia.innerText = "No se pudo determinar el día de pico y placa.";
        }

    } else {
        mensaje.innerText = "ESTRUCTURA INCORRECTA\nErrores: " + erroresEstructura;
        infoProvincia.innerText = "";
        infoTipo.innerText = "";
        infoDia.innerText = "";
    }
}
