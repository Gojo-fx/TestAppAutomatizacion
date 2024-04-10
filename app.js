const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // const fs = require('fs').promises;
    const find = req.query.find;
    const procesoid = req.query.procesoid;

    if (find === "getloghomologacion") {
    //   const filePath = `jsons/loghomologacion_${procesoid}.json`;
    
      // Verifica la existencia del archivo

    const logHomologacionJSON = {
        "estado": 200,
        "cantidad": 4,
        "pagina": 1,
        "data": [
          {
            "arrayID": [
              "113",
              "114",
              "117",
              "123"
            ],
            "cantidad": "4",
            "id": "123",
            "estado": "0",
            "proceso": "Prueba 104",
            "procesoId": "51",
            "datoError": "Baranquilla",
            "fila": "28",
            "hoja": "1",
            "ruta": "C:\\Users\\eholding01\\Downloads\\PRUEBA11.xlsx",
            "columna": "J",
            "operacionId": "5",
            "operacion": "Regional (Oficina/Ciudad)"
          },
          {
            "arrayID": [
              "112",
              "119",
              "108",
              "109"
            ],
            "cantidad": "4",
            "id": "109",
            "estado": "0",
            "proceso": "Prueba 104",
            "procesoId": "51",
            "datoError": "Bogotáa",
            "fila": "5",
            "hoja": "1",
            "ruta": "C:\\Users\\eholding01\\Downloads\\PRUEBA11.xlsx",
            "columna": "J",
            "operacionId": "5",
            "operacion": "Regional (Oficina/Ciudad)"
          },
          {
            "arrayID": [
              "110",
              "111",
              "122"
            ],
            "cantidad": "3",
            "id": "122",
            "estado": "0",
            "proceso": "Prueba 104",
            "procesoId": "51",
            "datoError": "Caliii",
            "fila": "26",
            "hoja": "1",
            "ruta": "C:\\Users\\eholding01\\Downloads\\PRUEBA11.xlsx",
            "columna": "J",
            "operacionId": "5",
            "operacion": "Regional (Oficina/Ciudad)"
          },
          {
            "arrayID": [
              "120",
              "121",
              "118",
              "115",
              "116"
            ],
            "cantidad": "5",
            "id": "116",
            "estado": "0",
            "proceso": "Prueba 104",
            "procesoId": "51",
            "datoError": "Pastst",
            "fila": "18",
            "hoja": "1",
            "ruta": "C:\\Users\\eholding01\\Downloads\\PRUEBA11.xlsx",
            "columna": "J",
            "operacionId": "5",
            "operacion": "Regional (Oficina/Ciudad)"
          }
        ],
        "mensaje": ""
      };

    res.json(logHomologacionJSON);

    //   fs.access(filePath)
    //     .then(() => fs.readFile(filePath, 'utf8'))
    //     .then(data => {
    //       const jsonData = JSON.parse(data);
    //       jsonData.tipoDato = "Quemado";
    //       res.json(jsonData);
    //     })
    //     .catch(err => {
    //       console.error('Error al leer el archivo:', err);
    //       if (err.code === 'ENOENT') {
    //         res.status(404).send('Archivo no encontrado');
    //       } else {
    //         res.status(500).send('Error interno del servidor');
    //       }
    //     });
    }
    // else if (find === "getregional") {
    //   const filePath = `jsons/regional.json`;
    
    //   // Verifica la existencia del archivo
    //   fs.access(filePath)
    //     .then(() => fs.readFile(filePath, 'utf8'))
    //     .then(data => {
    //       const jsonData = JSON.parse(data);
    //       jsonData.tipoDato = "Quemado";
    //       res.json(jsonData);
    //     })
    //     .catch(err => {
    //       console.error('Error al leer el archivo:', err);
    //       if (err.code === 'ENOENT') {
    //         res.status(404).send('Archivo no encontrado');
    //       } else {
    //         res.status(500).send('Error interno del servidor');
    //       }
    //     });
    // }
    // else if (find === "getcodigoean") {
    //   const filePath = `jsons/codigoean.json`;
    
    //   // Verifica la existencia del archivo
    //   fs.access(filePath)
    //     .then(() => fs.readFile(filePath, 'utf8'))
    //     .then(data => {
    //       const jsonData = JSON.parse(data);
    //       jsonData.tipoDato = "Quemado";
    //       res.json(jsonData);
    //     })
    //     .catch(err => {
    //       console.error('Error al leer el archivo:', err);
    //       if (err.code === 'ENOENT') {
    //         res.status(404).send('Archivo no encontrado');
    //       } else {
    //         res.status(500).send('Error interno del servidor');
    //       }
    //     });
    // }
    // else if (find === "getcodigoreemplazar") {
    //   const filePath = `jsons/codigoean.json`;
    
    //   // Verifica la existencia del archivo
    //   fs.access(filePath)
    //     .then(() => fs.readFile(filePath, 'utf8'))
    //     .then(data => {
    //       const jsonData = JSON.parse(data);
    //       jsonData.tipoDato = "Quemado";
    //       res.json(jsonData);
    //     })
    //     .catch(err => {
    //       console.error('Error al leer el archivo:', err);
    //       if (err.code === 'ENOENT') {
    //         res.status(404).send('Archivo no encontrado');
    //       } else {
    //         res.status(500).send('Error interno del servidor');
    //       }
    //     });
    // }
    else {
        res.send("'find' No encontrado");
    }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})