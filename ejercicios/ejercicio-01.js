let nombre = "Juan Mateo Cervantes";
let edad = 21;
let promedio = 4.3;
let semetre =  3;

console.log("Estudiante:", nombre);
console.log("Edad:", edad, "años");
console.log("Promedio:", promedio);
console.log("Semestre:", semetre);

if(promedio >= 4.0){
    console.log("Muy bien " + nombre + ", sigue así!");
}else{
    console.log("Aún esta a tiempo de mejorar " + nombre);
}

//justificación, se declaran variables para guardar la info y se crea un condicional para determinar el mensaje final.