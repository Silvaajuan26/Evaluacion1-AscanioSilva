// Declaro la variable y se pide al usuario ingresar la nota
function verifyApp() {
    let note = prompt("Ingresa la nota del examen (0 a 20):");
    note = Number(note);

    
    if (isNaN(note) || note < 0 || note > 20) {
        alert("Por favor, ingresa una nota válida entre 0 y 20.");
        return; 
    }

    // Mediante la estructura condicional determinamos el resultado
    if (note >= 11) {
        alert("El estudiante aprobó con una nota de: " + note);
    } else {
        alert("El estudiante reprobó con una nota de: " + note);
    }
}
verifyApp();
