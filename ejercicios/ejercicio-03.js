const array = [5,6,8,2,3,4,1,9,7]

const mayor = Math.max(...array)
const menor = Math.min(...array)
console.log(`Numero mayor: ${mayor}, Numero menor: ${menor}`)

const promedio = array.reduce((a, b) => a + b, 0) / array.length
console.log(`Promedio: ${promedio}`)

const pares = array.filter(num => num % 2 == 0)
console.log(`Numeros pares: ${pares}`)

array.sort()
console.log(array)