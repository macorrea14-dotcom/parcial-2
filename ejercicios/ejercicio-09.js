const productos = [ //array de objetos donde cada producto tiene su nombre, su categoría y la cantidad vendida
    {producto: "limpido", categoria: "aseo", cantidad: 15},
    {producto: "cepillo", categoria: "aseo", cantidad: 13},
    {producto: "agua", categoria: "bebida", cantidad: 10},
    {producto: "bonbon", categoria: "dulce", cantidad: 5},
    {producto: "arroz", categoria: "comida", cantidad: 25},
    {producto: "coca cola", categoria: "bebida", cantidad: 30}
]

const totalCategoria = productos.reduce((acumulador, i) => { //se usa reduce para sumar las cantidades de productos por categoría
    if (acumulador[i.categoria]){
        acumulador[i.categoria] += i.cantidad 
    }else{
        acumulador[i.categoria] = i.cantidad
    }
    return acumulador
},{})
console.log(totalCategoria)

//volvemos a usar reduce para encontrar el producto mas vendido
const masVendido = productos.reduce((mas, i) => {
    return i.cantidad > mas.cantidad ? i : mas
})
console.log(`Producto mas vendido: ${masVendido.producto}`)

/*justificacion: en este programa se analiza un conjunto de productos sumando las cantidades por categoría y 
determinando cual fue el más vendido, se aplica programacion funcional usando el metodo reduce para procesar los datos del array*/