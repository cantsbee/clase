// operaciones.js

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) return "Error: división por cero";
  return a / b;
}

// Exportamos las funciones
module.exports = { sumar, restar, multiplicar, dividir };
