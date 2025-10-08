// index.js
const express = require('express');
const operaciones = require('./operaciones');

const app = express();

// Endpoint raíz
app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de operaciones 🚀');
});

// Ejemplo: suma
app.get('/suma', (req, res) => {
  const a = parseInt(req.query.a) || 0;
  const b = parseInt(req.query.b) || 0;

  const resultado = operaciones.sumar(a, b);
  res.send(`La suma de ${a} + ${b} = ${resultado}`);
});

// Ejemplo: multiplicar
app.get('/multiplicar', (req, res) => {
  const a = parseInt(req.query.a) || 1;
  const b = parseInt(req.query.b) || 1;

  const resultado = operaciones.multiplicar(a, b);
  res.send(`La multiplicación de ${a} * ${b} = ${resultado}`);
});

// Arrancamos el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
