// Declaro un array con todos los numeros
const num = [23, 4, 6, 7, 99, 12, 19, 8, 43, 21, 65];

// Función para sumar los numeros del array
function addArray(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum; 
}

// Muestro el resultado en la consola
const result = addArray(num);
console.log("La suma de los elementos del array es:", result);
