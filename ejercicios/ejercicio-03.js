const array = [5,6,8,2,3,4,1,9,7]

const mayor = Math.max(...array)//el max encuentra el numero mayor
const menor = Math.min(...array)//el min encuentra el numero menor
console.log(`Numero mayor: ${mayor}, Numero menor: ${menor}`)

const promedio = array.reduce((a, b) => a + b, 0) / array.length//calcula el promedio sumando todos y dividiendo por la cantidad
console.log(`Promedio: ${promedio}`)

const pares = array.filter(num => num % 2 == 0)//filtra los números pares
console.log(`Numeros pares: ${pares}`)

array.sort()
console.log(array)

//justificacion: use métodos de arreglos como reduce, filter y sort para obtener datos como el promedio, los pares y los ordenados