// Función para convertir de Celsius a Fahrenheit
function result(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// Asigno valores manualmente y muestro resultado
console.log("10°C es igual a " + result(10) + "°F");  
console.log("30°C es igual a " + result(30) + "°F");   
console.log("100°C es igual a " + result(100) + "°F"); 
console.log("55°C es igual a " + result(55) + "°F"); 
console.log("-80°C es igual a " + result(-80) + "°F");   
