const estudiantes = [
    {nombre: "santiago", nota: 4.2}, 
    {nombre: "carlos", nota: 2},    
    {nombre: "manuel", nota: 3},
    {nombre: "juan", nota: 2.9}
];

const resultado = estudiantes.map(est => {
    return {
        ...est, 
        estado: est.nota  >= 3 ? "Gano :)" : "Perdio :("
    };
});

console.log(resultado)