/* console.log("log");
console.info("info");
console.warn(2*5)
console.error("error!");
console.table(
    {
        "nombre":"juan",
        "edad":12
    }
); */

/* --------------------------------------------------------- */

/* let cantidad = 32;
const valor = 30;
var otroValor = 29;
console.log("Hola grupo Bezos, aqui hay" , cantidad , "personas!");

cantidad = 34;
console.log("Hola grupo Bezos, aqui hay" , cantidad , "personas!"); */

/* --------------------------------------------------------- */

/* const text = "Hola grupo Bezos!";
console.log(text);
console.log(typeof text);

const numero = 15;
console.log(numero);
console.log(typeof numero);

const numeros = [15, 14, 30, 20];
let sinDefinir; */
/* console.log(numeros);
console.log(typeof numeros); */
/* var sinDefinir; */
/* console.log(typeof sinDefinir); */

/* --------------------------------------------------------- */

/*--- Buena practica: camelCase: ---*/ 
/* const cantidadEstudiantes = 32;
console.log(cantidadEstudiantes); */

/*--- Only letters and digits: ---*/
/* const user1 = null;
const user2 = null;
const user3 = null; */

/*--- Starting with "$" is allowed: ---*/
/* const $kind0fSpecial = x; */

/*--- Starting with "_" is allowed: ---*/
/* const _internalValue = y; */

/* --------------------------------------------------------- */

/*--- TIPOS DE FUNCIONES --- */
/* function saludar() {
    return "Hola";
}

console.log(saludar()) */

/* ---------- */
/* function suma(a,b) {
    return a+b;
}

console.log("La suma es:", suma(5, 3));
console.log(suma("5","3")); */

/* ---------- */
/* const sumar = function suma(a,b) {
    return a+b;
}

console.log("La suma es:", sumar(5,10));

const resultado = sumar(3,5);
console.log(resultado) */

/* ---------- */
/* const numero1 = 5;
const numero2 = 10;
console.log("La suma es:", sumar(numero1,numero2)); */

/*--- Funciones como objeto: ---*/
/* const saludar = new Function("return 'Hola';");
console.log(saludar());
 */
/*--- FUNCIONES ANONIMAS: ---*/
/* const sumarOtra = function (a,b) {
    return a+b;
} */
/*--- Funcion reducida: ---*/
/* const sumar1 = (a,b) => {
    return a+b;
} */
/*--- Mas reducida: ---*/
/* const sumar2= (a,b) => a+b; */
/*--- Reduccion al maximo: ---*/
/* const sumar4 = a => a+5; */

/*--- FUNCIONES CALLBACKS: ---*/
/* const fb = () => console.log("Funcion B ejecutandose");

const fa = a => a();

fa(fb); */

/*--- FUNCIONES AUTOEJECUTABLE: ---*/
/* console.log(
    (function saludar() {
    return "Hola"
    })()
);

console.log(
    (() => "Hola")()
); */

/* --------------------------------------------------------- */

const text = "Hola grupo Bezos \n";
const text2 = "Otro valor \n";
/* console.log(text.length);
console.log(text[1]);
console.log(text.charAt(1));
console.log(text.indexOf("o"));
console.log(text.indexOf("o", 2));
console.log(text.lastIndexOf("o"));
console.log(text.lastIndexOf("o", 13));
console.log(text.repeat(5)); */

/* const ip = "172.25.24.1";
console.log(ip.split("."));

console.log(text.split(" ")); */

/* const textoModificado = text.slice(2, 8);
console.log(textoModificado);
console.log(text); */

/* const clan = "bezos";
const jornada = "tarde";
console.log("Hola clan " + clan + ". Estan en la jornada " + jornada + ".") 
console.log(`Hola clan ${clan}. \nEstan en la jornada de la ${jornada}.`); */

/* const word = "Palabra en HTML";
const template = `<div class="container">${word}</div>` */;
/* console.log(template); */

/* --------------------------------------------------------- */
/*--- BUSCAR Y REEMPLAZAR ---*/
/* console.log(text.startsWith("H"));
console.log(text.endsWith("\n"));
console.log(text.includes("Hola")); */
/*--- BUSCAR Y REEMPLAZAR ---*/

/* const email = "    User.us123@user.com    ";
const regex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]{2,3})*$/g;
console.log(email.search(regex));
console.log(email.replaceAll("u", "o"));

console.log(email.toLowerCase());
console.log(email.toUpperCase());

console.log(email.trim());
console.log(email.length);
console.log(email.trimStart());
const emailCut = email.trimEnd();
console.log(emailCut.length); */

/* --------------------------------------------------------- */

/* const x = 5;
const y = 5;
const z = 5;
console.log(x==y || y==z); */

/* --- OPERADOR TERNARIO --- */
/* const v = null;
const user = null;
console.log(v? x:z);
console.log(v??z);

if (user == null) {
    console.log(z);
}

console.log(x??=z);

console.log(!v); */ 

/* --------------------------------------------------------- */
/*--- NUMBER ---*/
const num = 54224.64;
const numString = num.toPrecision(4);
const convertedString = parseFloat(numString);
const binaryNum = "ff";
const numero5 = parseInt(binaryNum, 16);
console.log(numero5);
console.log(num.toString());
console.log(numString);
console.log(convertedString);

/* --------------------------------------------------------- */
