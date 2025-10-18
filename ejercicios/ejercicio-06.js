const tabla = 5;
for (let i = 1; i<=10; i++){
    console.log(`${tabla} x ${i} = ${tabla * i}`);
}

const limite = 50
let primo = []

for (let num = 2; num <= limite; num++){
    let primos = true

    for (let i = 2; i<num; i++){
        if (num % i == 0){
            primos = false
            break
        }
    }
    if (primos){
        primo.push(num)
    }
}

console.log(`Numeros primos hasta el ${limite}: ${primo}`)