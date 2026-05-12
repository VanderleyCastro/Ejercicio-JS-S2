const producto = { 
    nombre: "Laptop",
    precio:200,
    stock: 5,

    calcularDescuento: function(porcentaje){
        let descuento = this.precio * (porcentaje/100);
        let precioFinal = this.precio - descuento;
        return precioFinal;
    }
};

console.log(producto.calcularDescuento(20));