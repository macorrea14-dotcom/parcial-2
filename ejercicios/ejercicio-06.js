const tabla = 5; //número base para la tabla
for (let i = 1; i<=10; i++){ //ciclo para recorrer del 1 al 10
    console.log(`${tabla} x ${i} = ${tabla * i}`); //muestra cada resultado de la tabla
}

const limite = 50 //límite hasta donde contar los números primos
let primo = [] //arreglo donde se guardarán los números primos

for (let num = 2; num <= limite; num++){ //recorre los números del 2 hasta el límite
    let primos = true  //se consfirma que el número es primo

    for (let i = 2; i<num; i++){ //verifica si el número tiene divisores
        if (num % i == 0){ //si se puede dividir no es primo
            primos = false
            break
        }
    }
    if (primos){ //si sigue siendo primo se guarda
        primo.push(num)
    }
}
console.log(`Numeros primos hasta el ${limite}: ${primo}`)

//justificación: use ciclos for anidados y una condición para comprobar si un número es primo y generar la tabla del 5