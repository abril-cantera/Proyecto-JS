function precioFinalCupones() {
    //Definiendo variables
    //Es para cuando se ingrese el valor
    const precioInput = document.getElementById("precioIngresado");
    const precioValue = precioInput.value;
    
    const cuponSelect = document.getElementById("valorCupon");
    const cuponValue = cuponSelect.value;

    // Función
    const porcentajeResidual = 100 - cuponValue;
    const precioFinal = (precioValue * porcentajeResidual) / 100;
    
    // Escribir en HTML desde JavaScript
    const mostrarPrecio = document.getElementById("mostrarPrecio");
    mostrarPrecio.innerText = "El precio con descuento son: $" + precioFinal;
}