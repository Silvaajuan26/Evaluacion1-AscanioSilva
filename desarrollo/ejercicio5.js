const personajes = [
    {
        "id": 1,
        "name": "Goku",
        "race": "Saiyan",
        "attack": 50000,
        "defense": 50000,
        "abilities": [
        "Transformaciones de Super Saiyan",
        "Super Kamehameha",
        "Super Dragon Fist"
        ] 
    },
    {
        "id":2,
        "name": "Vegeta",
        "race": "Saiyan",
        "attack": 49000,
        "defense": 49000,
        "abilities": [
        "Super Saiyan Transformations",
        "Final Flash",
        "Big Bang Attack"
        ]
    },
    {
        "id": 3,
        "name": "Gohan",
        "race": "Humano/Saiyan",
        "attack": 38000,
        "defense": 38000,
        "abilities": [
        "Super Saiyan Transformations",
        "Super Kamehameha",
        "Masenko"
        ]
    },
    
    {
        "id": 4,
        "name": "Freezer",
        "race": "Unknown",
        "attack": 47000,
        "defense": 47000,
        "abilities": [
        "Eye Laser",
        "Death Beam",
        "Death Ball"
        ]
    },
    {
        "id": 5,
        "name": "Cell",
        "race": "Android",
        "attack": 20000,
        "defense": 20000,
        "abilities": [
        "Energy Shield",
        "Super Kamehameha",
        "Destructo Disk"
        ]
    },
    {
        "id": 6,
        "name": "Buu",
        "race": "Majin",
        "attack": 29000,
        "defense": 29000,
        "abilities": [
        "Absorption",
        "Healing",
        "Chocolate Beam"
        ]
    }
]


//Desarrollo del ejercicion 5

// 1. Función para encontrar el personaje con el ataque más alto
function maxAttack(personajes) {
    return personajes.reduce((mayor, personaje) => personaje.attack > mayor.attack ? personaje : mayor);
}
console.log("El Personaje con el mayor ataque: es ", maxAttack(personajes));



// 2. Función para encontrar personajes de la raza Saiyan
function razaSaiyan(personajes) {
    return personajes.filter(personaje => personaje.race === "Saiyan");
}
console.log("Personajes de raza Saiyan:", razaSaiyan(personajes));



// 3. Función para calcular el total del ataque de todos los personajes
function totalAtaque(personajes) {
    return personajes.reduce((total, personaje) => total + personaje.attack, 0);
}
console.log("El calculo total del ataque de todos los personajes es de :", totalAtaque(personajes));



// 4. Función para devolver los nombres de los personajes
function nombresDePersonajes(personajes) {
    return personajes.map(personaje => personaje.name);
}
console.log("Nombres de los personajes:", nombresDePersonajes(personajes));