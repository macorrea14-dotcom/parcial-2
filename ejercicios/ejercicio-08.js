const num1 = 10
const num2 = 5

suma = num1 + num2
resta = num1 - num2                 //se hacen las operaciones basicas
multiplicacion = num1 * num2
division = num1 / num2

console.log(`suma: ${suma}, resta: ${resta}, multiplicacion: ${multiplicacion}, division: ${division}`) //mostramos los resultados de las operaciones

if (num2 == 0){ //se verifica si el segundo número es cero antes de dividir
    console.log("Error: No se puede dividir entre cero")
}else{
    console.log(`Division: ${division}`)
}

const promedio =  (num1 + num2) / 2 //se calcula el promedio de los dos numeros 
console.log(`Promedio de ambos numeros: ${promedio}`)

//compara los dos números para ver cuál es mayor o si son iguales
if (num1>num2){ 
    console.log("El primer numero es mayor")
}else if (num1<num2){
    console.log("El segundo numero es mayor")
}else{
    console.log("Los dos numeros son iguales")
}

/*justificación: el codigo realiza operaciones matematicas basicas entre dos numeros, 
valida que no se vaya a dividir entre cero y compara los valores para determinar cual es mayor*/