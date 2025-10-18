const num1 = 10
const num2 = 5

suma = num1 + num2
resta = num1 - num2
multiplicacion = num1 * num2
division = num1 / num2

console.log(`suma: ${suma}, resta: ${resta}, multiplicacion: ${multiplicacion}, division: ${division}`)

if (num2 == 0){
    console.log("Error: No se puede dividir entre cero")
}else{
    console.log(`Division: ${division}`)
}

const promedio =  (num1 + num2) / 2
console.log(`Promedio de ambos numeros: ${promedio}`)

if (num1>num2){
    console.log("El primer numero es mayor")
}else if (num1<num2){
    console.log("El segundo numero es mayor")
}else{
    console.log("Los dos numeros son iguales")
}