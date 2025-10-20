let producto={
    nombre:"Subaru Forester Strong HB",
    precio: 2150000000,
    stock:7,
};

function descuento(precio, porcentaje){
    let descuento= precio*(porcentaje/100);
    let valor_final= precio-descuento;
    return valor_final;
}
let prec_desc = descuento(producto.precio, 10);    // el 10 es el porcentaje de descuento
console.log("El precio con descuento es: " +prec_desc);

function info_general(nombre, precio, stock){
    console.log("Nombre del producto: " ,nombre);
    console.log("Precio del producto: " +precio);
    console.log("Stock:", stock + " unidades");

    if(stock>0){
        console.log("El producto está disponible");
    }else{
        console.log("El producto no está disponible");
    }
}
 info_general(producto.nombre, producto.precio, producto.stock);

 // el ejercicio se resolvió con dos funciones, una para el descuento y otra para mostrar la información del producto