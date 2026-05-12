const IVA = 0.19;

function calcularPrecioFinal(precio){
    return precio + (precio * IVA);
}

let precioProducto = 1000000;

console.log("Precio original: ", precioProducto);
console.log("Precio con IVA: ", calcularPrecioFinal(precioProducto));