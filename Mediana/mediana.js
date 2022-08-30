// Mediana: Este consiste en tener un numero de elementos numéricos, lo primero que debes de hacer es ordenarlos en forma ascendente:

// Si el numero de datos que hay en el “arreglo” es impar escogemos el numero de la mitad: Si fueran 15 posiciones escogemos la posición 8
// Si el numero de datos que hay en el “arreglo” es par escogemos el valor de las dos posiciones del centro y las dividimos en dos: Si fuera 16 escogemos la posición 8 y 9 y la dividimos entre 2
// Este proceso es mucho mas optimo que la media ya que los datos atípicos no afectaran demasiado el valor final.




function calcularMediaAritmetica(lista){
    const sumaLista=lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        });
        const promedioLista=sumaLista/lista.length;
        return promedioLista;
    }
const lista1=[100,200,500,400000000,];
const mitadLista1=parseInt(lista1.length/2);

function esPar(numerito){
    if(numerito%2===0){
    return true;
}else{
    return false;
}
}
let mediana;
if(esPar(lista1.length)){
    const elemento1=lista1[mitadLista1-1];
    const elemento2=lista1[mitadLista1];
    const promedioElemento1y2=calcularMediaAritmetica([elemento1,elemento2,]);
    mediana=promedioElemento1y2;
}else{
    mediana=lista1[mitadLista1];
}