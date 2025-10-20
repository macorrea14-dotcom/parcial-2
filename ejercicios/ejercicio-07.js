const estudiantes = [
    {nombre: "santiago", nota: 4.2}, 
    {nombre: "carlos", nota: 2},    
    {nombre: "manuel", nota: 3},
    {nombre: "juan", nota: 2.9}
];

const resultado = estudiantes.map(est => { //se usa el map para recorrer cada estudiante y crear un nuevo arreglo
    return {
        ...est, //mantiene los datos originales del estudiante
        estado: est.nota  >= 3 ? "Gano :)" : "Perdio :("
    };
});

console.log(resultado)

/*justificacion: use el método map para generar un nuevo arreglo sin modificar el original, 
aplicando una condición que determina si el estudiante gano o perdio segun su nota*/