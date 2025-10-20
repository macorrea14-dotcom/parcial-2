function area_rect(base, altura) {  
    let resultado = base * altura;      
    return resultado;
}
let area=area_rect(5, 10); 
console.log("El área del rectángulo es: " +area);

function area_circ(radio) {
    let pi=3.1416;
    let resultado= pi*radio*radio;
    return resultado;
}
let area1=area_circ(3);
console.log("El área del círculo es: " +area1);

function area_triang(base, altura) {
    let resultado= (base*altura)/2;
    return resultado;
}
let area2=area_triang(7, 4);
console.log("El área del triangulo es: " +area2);

//justificación: se crean 3 funcionaes con las diferentes areas para asi seguir un patrón limpio y ordenado
