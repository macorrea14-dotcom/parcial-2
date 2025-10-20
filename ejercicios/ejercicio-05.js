function calificacion(puntaje) {
    if (isNaN(puntaje)){            // la función isNaN() verifica si el valor no es un número
        return "error, no es un número";
    }
    
    let letra ="";
    let calificacion ="";

    if(puntaje >=90){
        letra ="A";
        calificacion = "APROBADO";
    }else if(puntaje >= 80){
        letra ="B";
        calificacion = "APROBADO";
    }else if(puntaje >= 70){    
        letra ="C";
        calificacion = "APROBADO";
    }else if(puntaje >= 60){
        letra ="D";
        calificacion = "REPROBADO";
    }else{
        letra ="F";
        calificacion = "REPROBADO";
    }
    console.log("Nota:", puntaje);
    console.log("Calificación:", letra);
    console.log("Estado:", calificacion);
    
    return letra
}
console.log("Estuadiante #1: ")
calificacion(92);

//justificación, se hace una función que reciba el puntaje y devuelva la calificación usando condicionales.