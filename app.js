const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 80;

app.use(express.json());

app.get('/', (req, res) => {
  const find = req.query.find;
  const procesoid = req.query.procesoid;

  if(find == "getloghomologacion") {
    fs.readFile(`jsons/loghomologacion_${procesoid}.json`, 'utf8', (err, data) => {

      if (err) {
        console.error('Error al leer el archivo:', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
      // Parsea el contenido del archivo JSON
      const jsonData = JSON.parse(data);
      jsonData.tipoDato = "Quemado";
      // Envía el contenido como respuesta
      res.json(jsonData);
    });
  }
  else if(find == "getregional") {
    fs.readFile('jsons/regional.json', 'utf8', (err, data) => {

      if (err) {
        console.error('Error al leer el archivo:', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
      // Parsea el contenido del archivo JSON
      const jsonData = JSON.parse(data);
      jsonData.tipoDato = "Quemado";
      // Envía el contenido como respuesta
      res.json(jsonData);
    });
  }
  else if(find == "getcodigoean") {
    fs.readFile('jsons/codigoean.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
      // Parsea el contenido del archivo JSON
      const jsonData = JSON.parse(data);
      jsonData.tipoDato = "Quemado";
      // Envía el contenido como respuesta
      res.json(jsonData);
    });
  }
  else if(find == "getcodigoreemplazar") {
    fs.readFile('jsons/codigoean.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
      // Parsea el contenido del archivo JSON
      const jsonData = JSON.parse(data);
      jsonData.tipoDato = "Quemado";
      // Envía el contenido como respuesta
      res.json(jsonData);
    });
  }
});


app.post('/', (req, res) => {
  res.json(req.body);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
