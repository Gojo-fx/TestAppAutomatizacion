const { count } = require('console');
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta de ejemplo
app.get('/loghomologacion', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
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
});

app.get('/homologacionopciones', (req, res) => {
    fs.readFile('Allhomologacionopciones.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error al leer el archivo:', err);
          res.status(500).send('Error interno del servidor');
          return;
        }
        // Parsea el contenido del archivo JSON
        const reqQuery = req.query;
        const operacionID = reqQuery.operacionid;
        const limit = reqQuery.limit ?? null;
        const headers = (reqQuery.headers == true || reqQuery.headers == "true") ? true : false;
        const getData = (reqQuery.data == true || reqQuery.data == "true") ? true : false;

        const jsonData = JSON.parse(data);

        let operacion = jsonData[operacionID]["data"];

        if(limit) {
          operacion = operacion.slice(0, 15);
        }

        res.json({
          "estado": 200,
          "id": operacionID,
          "cantidad": operacion.length,
          "data": getData ? operacion : [],
          "encabezados": headers ? jsonData[operacionID]["headers"] : [],
        });
      });
});

app.post('/', (req, res) => {
  res.json(req.body);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
