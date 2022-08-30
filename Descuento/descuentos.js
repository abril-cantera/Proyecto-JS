function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  

    
    //Esto en ves de mostrar una alerta, muestra un mensaje en el cuerpo del html
    //Esta constante guarda un ID de un parrafo, el cual se va a
    //mostra solo cuando se lo necesite
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
  
  