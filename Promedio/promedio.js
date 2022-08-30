// Media o promedio aritmético: Consiste en sumar cada numero y dividirlo por la cantidad de numero que hay.

// (20 + 30 + 40) = 90 / 3 = 30
// Este no es tan optimo ya que si ingresa algo a lo que se le llama “dato atípico” los resultados no serian muy acertados.

// .



function calcularMediaAritmetica(lista){
    const sumaLista=lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
        return valorAcumulado+nuevoElemento;
    });
const promedioLista=sumaLista/lista.length;
return promedioLista;
}