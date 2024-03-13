const { count } = require('console');
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta de ejemplo
app.get('/loghomologacion', (req, res) => {
    fs.readFile('AllProcesos.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error al leer el archivo:', err);
          res.status(500).send('Error interno del servidor');
          return;
        }

        const { query: reqQuery } = req;
        if (!reqQuery.hasOwnProperty("procesoid")) {
          // Manejo del error cuando operacionid no está presente
        }
        
        const procesoID = reqQuery.procesoid;
        const jsonData = JSON.parse(data).data;
        let proceso = jsonData[procesoID] ?? [];
        
        if (reqQuery.limit) {
          proceso = proceso.slice(0, 15);
        }
        
        const limit = reqQuery.limit ?? null;
        // const headers = !!reqQuery.headers;
        const getData = !!reqQuery.data;        

        res.json({
          "estado": 200,
          "id": procesoID,
          "cantidad": proceso.length,
          "data": getData ? proceso : []
        });
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
        const { query: reqQuery } = req;

        if (!reqQuery.hasOwnProperty("operacionid")) {
          // Manejo del error cuando operacionid no está presente
        }
        
        const operacionID = reqQuery.operacionid;
        const jsonData = JSON.parse(data);
        let operacion = jsonData[operacionID]?.data ?? [];
        
        if (reqQuery.limit) {
          operacion = operacion.slice(0, 15);
        }
        
        const limit = reqQuery.limit ?? null;
        const headers = !!reqQuery.headers;
        const getData = !!reqQuery.data;        

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
