const productos = [
    {producto: "limpido", categoria: "aseo", cantidad: 15},
    {producto: "cepillo", categoria: "aseo", cantidad: 13},
    {producto: "agua", categoria: "bebida", cantidad: 10},
    {producto: "bonbon", categoria: "dulce", cantidad: 5},
    {producto: "arroz", categoria: "comida", cantidad: 25},
    {producto: "coca cola", categoria: "bebida", cantidad: 30}
]

const totalCategoria = productos.reduce((acumulador, i) => {
    if (acumulador[i.categoria]){
        acumulador[i.categoria] += i.cantidad 
    }else{
        acumulador[i.categoria] = i.cantidad
    }
    return acumulador
},{})
console.log(totalCategoria)

const masVendido = productos.reduce((mas, i) => {
    return i.cantidad > mas.cantidad ? i : mas
})

console.log(`Producto mas vendido: ${masVendido.producto}`)