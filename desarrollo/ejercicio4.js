// Funcion con tres numeros diferentes y asigno el primer numero a la que sera la condicional
function mayor(num1, num2, num3) {
    let max = num1; 
    
    // Determino primero si el segundo numero es mayor al primero y luego el tercero con el mismo.
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}

// Asigno numero a las funciones 
console.log("De los numeros (2, 10, 4) el Mayor es: " + mayor(2, 10, 4));    
console.log("De los numeros (70, 3, 98) el Mayor es: " + mayor(70, 3, 98));   
console.log("De los numeros (23, 54, 8) el Mayor es: " + mayor(23, 54, 8)); 
