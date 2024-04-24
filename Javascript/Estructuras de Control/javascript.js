/* let edad = 70; */

/*----- Formas de hacerlo -----*/
/* if (edad >= 18) {
    if (edad >= 65) {
        console.log("Tienes restricciones de manejo.");
    }
    else {
        console.log("Eres mayor de edad, puedes manejar.");
    }
} */
/*----- Formas de hacerlo -----*/

/*----- Formas de hacerlo -----*/
/* if (edad >= 18 & edad <= 65) {
    console.log("Eres mayor de edad, puedes votar.");
}

else if (edad >= 65) {
    console.log("Tienes restricciones de manejo.");
} */
/*----- Formas de hacerlo -----*/

/*----- Formas de hacerlo -----*/
/* if (edad >= 18 && edad <= 65) {
    console.log("Eres mayor de edad, puedes manejar.");
}

else if (edad > 65) {
    console.log("Tienes restricciones de manejo.");
} */
/*----- Formas de hacerlo -----*/

/* else {
    console.log("No eres mayor de edad.");
} */

/* let nacionalidad = prompt("Ingrese una nacionalidad:"); */

/* if (nacionalidad == "colombiano") {
    console.log("Eres colombiano.");
}

else if (nacionalidad == "venezolano") {
    console.log("Eres venezolano.");
}

else {
    console.log("Eres de otro pais.");
} */

/* ----------------------------------------------------------- */
/*----- SWITCH -----*/
/* let nacionalidad = prompt("Ingrese una nacionalidad:");
let nacionalidadFormateada = nacionalidad.toLowerCase();

switch (nacionalidadFormateada) {
    case "colombiano":
        console.log("Eres colombiano.");
        break;
    case "venezolano":
        console.log("Eres venezolano.");
        break;
    default:
        console.log("Eres de otro pais.");
        break;
} */
/* ----------------------------------------------------------- */
/*----- BUCLES Y CICLOS: -----*/

//For con variables de control, anidados, con saltos, y con etiquetas:

/* for (let i = 0; i <= 5; i++) {
    console.log(i);
} */

/* for (let i = 0, j = 10; i <= 5, j>2; i++, j-= 2) {
    console.log(`i: ${i}, j: ${j}`);
}
 */
/* for (let i = 1; i <= 3; i++) {
    console.log(`Iteracion Externa ${i}`);
    for (let j = 0; j < 4; j++) {
        console.log(`Iteracion Interna ${j}`);
    }
} */

//For in of, for - in:

/* let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
    console.log(i + ": " + colors[i]);
}

for (let color of colors) {
    console.log(color);
}

for (let index in colors) {
    console.log(index + ": " + colors[index]);
} */

// --- WHILE --- 
/* let limit = 10;
let counter = 1;

while (counter <= limit) {
    console.log(counter);
    counter++;

    limit = Math.floor(Math.random() * 20) + 1;
    console.log(limit)
} */

let userInput;
let isValid;

do {
    userInput = prompt("Ingresa un numero entre 1 y 100:")
    isValid = userInput >= 1 && userInput <=100;
    if(!isValid) {
        console.log(`¡El valor ${userInput} no se encuentra en el rango!`);
    }
    else {
        console.log(`¡Has ingresado un numero valido: ${userInput}!`);
    }
} while (!isValid);

