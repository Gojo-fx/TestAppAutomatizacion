const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const fs = require('fs').promises;
    const find = req.query.find;
    const procesoid = req.query.procesoid;

    if (find === "getloghomologacion") {
      const filePath = `jsons/loghomologacion_${procesoid}.json`;
    
      // Verifica la existencia del archivo
      fs.access(filePath)
        .then(() => fs.readFile(filePath, 'utf8'))
        .then(data => {
          const jsonData = JSON.parse(data);
          jsonData.tipoDato = "Quemado";
          res.json(jsonData);
        })
        .catch(err => {
          console.error('Error al leer el archivo:', err);
          if (err.code === 'ENOENT') {
            res.status(404).send('Archivo no encontrado');
          } else {
            res.status(500).send('Error interno del servidor');
          }
        });
    }
    


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})