//Valores universales para toda la actividad:
let num = 7;
let text = "69.96";
let numNegative = -10;
let x = 23;
let y = x;

// 1. Numero a un nuevo numero:
let newNum = Number(num);
console.log(newNum);

// 2. Rangos numéricos - Number.MAX_VALUE:
console.log(Number.MAX_VALUE);

//3. Rangos numéricos - Number.MIN_VALUE:
console.log(Number.MIN_VALUE);

// 4. Rangos numéricos - Number.MAX_SAFE_INTEGER:
console.log(Number.MAX_SAFE_INTEGER);

// 5. Rangos numéricos - Number.MIN_SAFE_INTEGER:
console.log(Number.MAX_SAFE_INTEGER);

// 6. Comprobación numérica - Number.isFinite(number):
console.log(Number.isFinite(num));

// 7. Comprobación numérica - Number.isInteger(number):
console.log(Number.isInteger(num));

// 8. Comprobación numérica - Number.isSafeInteger(number):
console.log(Number.isSafeInteger(num));

// 9. Representación numérica - .toExponential(digits):
console.log(num.toExponential());

// 10. Representación numérica - .toFixed(digits):
console.log(num.toFixed());

// 11. Representación numérica - .toPrecision(size):
console.log(num.toPrecision());

// 12. Convertir - Number.parseInt(text):
console.log(Number.parseInt(text));

// 13. Convertir - Number.parseInt(text, radix):
console.log(Number.parseInt(text,7));

// 14. Convertir - Number.parseFloat(text):
console.log(Number.parseFloat(text));

// 15. Convertir - Number.parseFloat(text, radix):
console.log(Number.parseFloat(text,7));

// 16. Convertir - .toString:
console.log(num.toString());

// 17. Método Math.abs(x):
console.log(Math.abs(numNegative));

//18. Método Math.sign(x):
console.log(Math.sign(numNegative));

// 19. Método Math.exp(x):
console.log(Math.exp(num));

// 20. Método Math.expm1(x):
console.log(Math.expm1(num));

// 21. Método Math.max(a, b, c...):
console.log(Math.max(33,2,16,69,50));

// 22. Método Math.min(a, b, c...):
console.log(Math.min(33,2,16,69,50));

// 23. Método Math.pow(base, exp):
console.log(Math.pow(num,2));

// 24. Método Math.sqrt(x):
console.log(Math.sqrt(num));

// 25. Método Math.cbrt(x):
console.log(Math.cbrt(num));

// 26. Método Math.imul(a, b):
console.log(Math.imul(num,numNegative));

// 27. Método Math.clz32(x):
console.log(Math.clz32(num));

// 28. Método Math.random()
console.log(Math.random());

// 29. Método de redondeo - Math.round(x):
console.log(Math.round(text));

// 30. Método de redondeo - Math.ceil(x):
console.log(Math.ceil(text));

// 31. Método de redondeo - Math.floor(x):
console.log(Math.floor(text));

// 32. Método de redondeo - Math.fround(x):
console.log(Math.fround(text));

// 33. Método de redondeo - Math.trunc(x):
console.log(Math.trunc(text));

// 34. Método trigonométrico - Math.sin(x):
console.log(Math.sin(num));

// 35. Método trigonométrico - Math.cos(x):
console.log(Math.cos(num));

// 36. Método trigonométrico - Math.tan(x):
console.log(Math.tan(num));

// 37. Método trigonométrico - Math.hypot(a, b...):
console.log(Math.hypot(num,numNegative));

// 38. Operadores aritméticos con .toFixed(digits), Number.parseInt(text):
console.log(`--- SALTO DE PUNTOS ---`);

// SALTO DE PUNTOS

// 44. Operadores de asignación con Asignación:
console.log(y);

// 45. Operadores de asignación con a += b:
console.log(numNegative += num);

// 46. Operadores de asignación con Suma y asignación:
console.log(num += numNegative);

// 47. Operadores de asignación con Resta y asignación:
console.log(num -= numNegative);

// 48. Operadores de asignación con Multiplicación y asignación:
console.log(num *= numNegative);

// 49. Operadores de asignación con División y asignación:
console.log(num /= numNegative);

// 50. Operadores de asignación con Módulo y asignación:
console.log(num %= numNegative);

// 51. Operadores de asignación con Exponenciación y asignación:
console.log(numNegative **= 4);

// 52. Operadores unarios Incremento:
console.log(numNegative ++);
