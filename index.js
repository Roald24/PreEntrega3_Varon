function verificarEdad() {

    var nombre = prompt("Por favor, ingrese su nombre:");


    var edad = prompt("Por favor, ingresa tu edad:");

    if (edad !== null) {
        edad = parseInt(edad);

        if (isNaN(edad) || edad <= 0 || edad > 120) {
            alert("Por favor, ingresa una edad válida (mayor a 0 y menor o igual a 120).");
        } else {
            if (edad >= 18) {
                alert("Puedes continuar comprando cannabis medicinal.");
            } else {
                alert("Lo siento, no puedes consumir marihuana.");
            }
        }
    } else {
        alert("Por favor, ingresa tu edad para continuar.");
    }
}
