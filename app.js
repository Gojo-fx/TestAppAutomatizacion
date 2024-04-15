const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // const fs = require('fs').promises;
    const find = req.query.find;
    const procesoid = req.query.procesoid;

    if (find === "getloghomologacion") {

        const logHomologacionJSON = {
          "estado": 200,
          "nombre": "Prueba 103",
          "id": 50,
          "cantidad": 4,
          "pagina": 1,
          "data": [
            {
              "arrayID": [
                "206",
                "207"
              ],
              "cantidad": "2",
              "id": "207",
              "estado": "0",
              "proceso": "Prueba 103",
              "procesoId": "50",
              "datoError": "1117632",
              "fila": "5",
              "hoja": "1",
              "ruta": "C:\\Users\\eholding01\\Downloads\\PRUEBA12.xlsx",
              "columna": "A",
              "operacionId": "6",
              "operacion": "Código EAN (Código cliente)"
            },
            {
              "arrayID": [
                "208",
                "205"
              ],
              "cantidad": "2",
              "id": "205",
              "estado": "0",
              "proceso": "Prueba 103",
              "procesoId": "50",
              "datoError": "250954",
              "fila": "3",
              "hoja": "1",
              "ruta": "C:\\Users\\eholding01\\Downloads\\PRUEBA12.xlsx",
              "columna": "A",
              "operacionId": "6",
              "operacion": "Código EAN (Código cliente)"
            },
            {
              "arrayID": [
                "199",
                "201"
              ],
              "cantidad": "2",
              "id": "201",
              "estado": "0",
              "proceso": "Prueba 103",
              "procesoId": "50",
              "datoError": "Ciudad del Campo",
              "fila": "3",
              "hoja": "1",
              "ruta": "C:\\Users\\eholding01\\Downloads\\PRUEBA12.xlsx",
              "columna": "I",
              "operacionId": "5",
              "operacion": "Regional (Oficina/Ciudad)"
            },
            {
              "arrayID": [
                "202",
                "200"
              ],
              "cantidad": "2",
              "id": "200",
              "estado": "0",
              "proceso": "Prueba 103",
              "procesoId": "50",
              "datoError": "Villa Gorgona",
              "fila": "6",
              "hoja": "1",
              "ruta": "C:\\Users\\eholding01\\Downloads\\PRUEBA12.xlsx",
              "columna": "I",
              "operacionId": "5",
              "operacion": "Regional (Oficina/Ciudad)"
            },
            {
              "arrayID": [
                "205",
                "203"
              ],
              "cantidad": "3",
              "id": "200",
              "estado": "0",
              "proceso": "Prueba 103",
              "procesoId": "50",
              "datoError": "B:F65",
              "fila": "4",
              "hoja": "1",
              "ruta": "C:\\Users\\eholding01\\Downloads\\PRUEBA12.xlsx",
              "columna": "I",
              "operacionId": "9",
              "operacion": "Bodega Cliente (Recibe: Código bodega)"
            }
          ],
          "mensaje": ""
        };

        res.json(logHomologacionJSON);

    }
    else if (find === "getregional") {
        const regional = {
            "estado": 200,
            "id": "",
            "cantidad": 7,
            "data": [
              "BARRANQUILLA",
              "BOGOTA",
              "BUCARAMANGA",
              "CALI",
              "CENTRO",
              "MEDELLIN",
              "PEREIRA"
            ],
            "mensaje": ""
        };

        res.json(regional);

    }
    else if (find === "getcodigoean") {
        const codigoEan = {
            "estado": 200,
            "id": "",
            "page": 1,
            "cantidad": 10,
            "data": [
              {
                "idMaterial": "4618",
                "descMaterial": "(I) - (A)-AGUA OXIGENADA JGB x 120ml                                                                ",
                "ean": "7702560000010"
              },
              {
                "idMaterial": "4547",
                "descMaterial": "(I) - (A)-AGUA OXIGENADA JGB x 3500ml                                                               ",
                "ean": "7702560010804"
              },
              {
                "idMaterial": "4545",
                "descMaterial": "(I) - (A)-AGUA OXIGENADA JGB x 500ml                                                                ",
                "ean": ""
              },
              {
                "idMaterial": "4672",
                "descMaterial": "(I) - (A)-ANALPER 1% GEL TUBX30G                                                                    ",
                "ean": "7703763992973"
              },
              {
                "idMaterial": "4670",
                "descMaterial": "(I) - (A)-ANALPER GRIP TAB CJA X 10                                                                 ",
                "ean": "7703763995356"
              },
              {
                "idMaterial": "4619",
                "descMaterial": "(I) - (A)-DIOXOGEN LIQUIDO x 120ml                                                                  ",
                "ean": ""
              },
              {
                "idMaterial": "4619",
                "descMaterial": "(I) - (A)-DIOXOGEN LIQUIDO x 120ml                                                                  ",
                "ean": "7702560000027"
              },
              {
                "idMaterial": "4669",
                "descMaterial": "(I) - (A)-HEDRALIV JARABE x 120ML                                                                   ",
                "ean": "7703763993826"
              },
              {
                "idMaterial": "2876",
                "descMaterial": "(I) - (S) ALGODON ZIG ZAG x 250g-PQ x 12                                                            ",
                "ean": ""
              },
              {
                "idMaterial": "4646",
                "descMaterial": "(I) - 2 CITROMEL GTIS 1 ALCOHOL x 120ml                                                             ",
                "ean": "7702560024214"
              },
              {
                "idMaterial": "974",
                "descMaterial": "(I) - ALCOHOL ANTISEPTICO JGB x 350ml                                                               ",
                "ean": ""
              },
              {
                "idMaterial": "974",
                "descMaterial": "(I) - ALCOHOL ANTISEPTICO JGB x 350ml                                                               ",
                "ean": "7702560009532"
              },
              {
                "idMaterial": "973",
                "descMaterial": "(I) - ALCOHOL ANTISEPTICO JGB x 700ml                                                               ",
                "ean": ""
              },
              {
                "idMaterial": "973",
                "descMaterial": "(I) - ALCOHOL ANTISEPTICO JGB x 700ml                                                               ",
                "ean": "7702560009525"
              },
              {
                "idMaterial": "4005",
                "descMaterial": "(I) - ALGODON ARBORA x 75gr                                                                         ",
                "ean": "7704269111004"
              },
              {
                "idMaterial": "3977",
                "descMaterial": "(I) - ALGODON LITTLE ANGELS x 50g                                                                   ",
                "ean": "1013002027677"
              },
              {
                "idMaterial": "29",
                "descMaterial": "(I) - ALGODON POMOS JGB x 40g                                                                       ",
                "ean": "7702560000294"
              },
              {
                "idMaterial": "2801",
                "descMaterial": "(I) - ALGODON POMOS PARA BEBE JGB x 40g                                                             ",
                "ean": "7702560028014"
              },
              {
                "idMaterial": "4415",
                "descMaterial": "(I) - ANALPER SPRAY  1% X 90ML                                                                      ",
                "ean": "7703763996735"
              },
              {
                "idMaterial": "2734",
                "descMaterial": "(I) - BIOTINA x 60 CAPS                                                                             ",
                "ean": "7702560027345"
              },
              {
                "idMaterial": "3821",
                "descMaterial": "(I) - BLANQ. YES FLORAL P1800 LL2200cc                                                              ",
                "ean": "7702560038211"
              },
              {
                "idMaterial": "3822",
                "descMaterial": "(I) - BLANQ. YES LAVANDA P1800 LL2200cc                                                             ",
                "ean": "7702560038228"
              },
              {
                "idMaterial": "3845",
                "descMaterial": "(I) - BLANQ.“AGENTE X” TRAD 2lts(5.25%)                                                             ",
                "ean": "7704269114715"
              },
              {
                "idMaterial": "2338",
                "descMaterial": "(I) - BLANQ.TRADICIONAL P900 LL1000                                                                 ",
                "ean": "7702560023385"
              },
              {
                "idMaterial": "1149",
                "descMaterial": "(I) - BLANQ.YES TRADICIONAL x 1000cc                                                                ",
                "ean": "7702560011498"
              },
              {
                "idMaterial": "2950",
                "descMaterial": "(I) - BLANQUEADOR YES CITRICA x 1000cc                                                              ",
                "ean": "7702560029509"
              },
              {
                "idMaterial": "3178",
                "descMaterial": "(I) - BLANQUEADOR YES FLORAL x 450cc                                                                ",
                "ean": "7702560031786"
              },
              {
                "idMaterial": "3399",
                "descMaterial": "(I) - BOLSA BLANQ. YES TRADICIONAL 700cc                                                            ",
                "ean": "7702560033995"
              },
              {
                "idMaterial": "3224",
                "descMaterial": "(I) - BRONQ. SPRAY GARGANTA UVA x 120ml                                                             ",
                "ean": "7702560032240"
              },
              {
                "idMaterial": "4572",
                "descMaterial": "(I) - BRONQUISOL FLEM ADULTO x 120ml                                                                ",
                "ean": "7709031877591"
              },
              {
                "idMaterial": "4633",
                "descMaterial": "(I) - BRONQUISOL UNGUENTO x 19g                                                                     ",
                "ean": "7702560000140"
              },
              {
                "idMaterial": "4405",
                "descMaterial": "(I) - BUCOXOL TRIP ACCI FRUT ROJ X120ML                                                             ",
                "ean": "7703763997008"
              },
              {
                "idMaterial": "4406",
                "descMaterial": "(I) - BUCOXOL TRIP ACCI MIEL LIM X 120ML                                                            ",
                "ean": "7703763996995"
              },
              {
                "idMaterial": "3488",
                "descMaterial": "(I) - CAJA T.ROJO FRESA x 380g P32 LL36                                                             ",
                "ean": "7702560034886"
              },
              {
                "idMaterial": "1093",
                "descMaterial": "(I) - CEPILLO DENTAL FLUOCARDENT FLEX                                                               ",
                "ean": "7702560010934"
              },
              {
                "idMaterial": "177",
                "descMaterial": "(I) - CEPILLO DIAMANTE ADULTO                                                                       ",
                "ean": "7702560001772"
              },
              {
                "idMaterial": "3756",
                "descMaterial": "(I) - CEPILLO FLUOC. FLEX PACK x 2unds                                                              ",
                "ean": "7702560037566"
              },
              {
                "idMaterial": "3802",
                "descMaterial": "(I) - CEPILLO FLUOCARDENT NIÑO AVENGERS                                                             ",
                "ean": "7702560038020"
              },
              {
                "idMaterial": "2550",
                "descMaterial": "(I) - CEPILLO FLUOCARDENT SENSITIVE                                                                 ",
                "ean": "7702560021015"
              },
              {
                "idMaterial": "4359",
                "descMaterial": "(I) - CEPILLO PREV.CARIES PACK x 3unds                                                              ",
                "ean": "7702560043598"
              },
              {
                "idMaterial": "3358",
                "descMaterial": "(I) - CHICOS CHOCOLATE SOBRE x 20g                                                                  ",
                "ean": "7702560033582"
              },
              {
                "idMaterial": "1368",
                "descMaterial": "(I) - CONDON MYSTIC EXTREMO x 3und                                                                  ",
                "ean": "7702560013683"
              },
              {
                "idMaterial": "3024",
                "descMaterial": "(I) - CONDON MYSTIC SURTIDO P14 LL20                                                                ",
                "ean": "7702560030246"
              },
              {
                "idMaterial": "3025",
                "descMaterial": "(I) - CONDON MYSTIC SURTIDO P40 LL60                                                                ",
                "ean": "7702560030253"
              },
              {
                "idMaterial": "4004",
                "descMaterial": "(I) - COPITOS ARBORA x 125unds                                                                      ",
                "ean": "7704269109636"
              },
              {
                "idMaterial": "3976",
                "descMaterial": "(I) - COPITOS LITTLE ANGELS x 100unds                                                               ",
                "ean": "1013002027554"
              },
              {
                "idMaterial": "3910",
                "descMaterial": "(I) - CREMA ARNICA CASA NATURA x 60gr                                                               ",
                "ean": "7702560039102"
              },
              {
                "idMaterial": "3873",
                "descMaterial": "(I) - CURITAS STANDARD JGB x 100unds                                                                ",
                "ean": "7702560038730"
              },
              {
                "idMaterial": "3871",
                "descMaterial": "(I) - CURITAS STANDARD JGB x 10unds                                                                 ",
                "ean": "7702560038716"
              },
              {
                "idMaterial": "2777",
                "descMaterial": "(I) - DESMANCHADOR YES R.BLANCA x 1000cc                                                            ",
                "ean": "7702560027772"
              },
              {
                "idMaterial": "718",
                "descMaterial": "(I) - DIOXODIN BUCOFARINGEO x 120ml                                                                 ",
                "ean": "7702560007187"
              },
              {
                "idMaterial": "1044",
                "descMaterial": "(I) - DIOXODIN ESPUMA GALON x 3500ml                                                                ",
                "ean": "7702560010446"
              },
              {
                "idMaterial": "716",
                "descMaterial": "(I) - DIOXODIN ESPUMA x 120ml                                                                       ",
                "ean": "7702560007163"
              },
              {
                "idMaterial": "715",
                "descMaterial": "(I) - DIOXODIN ESPUMA x 60ml                                                                        ",
                "ean": "7702560007156"
              },
              {
                "idMaterial": "4640",
                "descMaterial": "(I) - DIOXODIN SOLUCION GALON x 3500ml                                                              ",
                "ean": "7702560010415"
              },
              {
                "idMaterial": "2898",
                "descMaterial": "(I) - DUOPACK ESPUMA DE AFEITAR                                                                     ",
                "ean": "7702560028984"
              },
              {
                "idMaterial": "2340",
                "descMaterial": "(I) - ENJUAGUE ADULTO MENTA FRESCAx600ml                                                            ",
                "ean": "7702560023408"
              },
              {
                "idMaterial": "3567",
                "descMaterial": "(I) - ENJUAGUE ADULTO MENTA FRIA x 46ml                                                             ",
                "ean": "7702560035678"
              },
              {
                "idMaterial": "3363",
                "descMaterial": "(I) - ESPUMA CLASICA GTS T.ACCION x 50                                                              ",
                "ean": "7702560033636"
              },
              {
                "idMaterial": "3783",
                "descMaterial": "(I) - FIBRA ABRASIVA REGULAR YES x 3unds                                                            ",
                "ean": "7702560037832"
              },
              {
                "idMaterial": "3978",
                "descMaterial": "(I) - FIBRA CASA NATURA x 400g                                                                      ",
                "ean": "7702560039782"
              },
              {
                "idMaterial": "82",
                "descMaterial": "(I) - FLUOCARDENT MENTA x 75cm3                                                                     ",
                "ean": "7702560000829"
              },
              {
                "idMaterial": "643",
                "descMaterial": "(I) - FLUOCARDENT NIÑOS x 50cm3                                                                     ",
                "ean": "7702560006432"
              },
              {
                "idMaterial": "2260",
                "descMaterial": "(I) - FLUOCARDENT SENSITIVE x 50ml                                                                  ",
                "ean": "7702560022609"
              },
              {
                "idMaterial": "1018",
                "descMaterial": "(I) - FLUOCARDENT TRIPLE ACCION x 100cm3                                                            ",
                "ean": "7702560010187"
              },
              {
                "idMaterial": "3840",
                "descMaterial": "(I) - FLUOCARDENT TRIPLE ACCION x 45cm3                                                             ",
                "ean": "7702560038402"
              },
              {
                "idMaterial": "1017",
                "descMaterial": "(I) - FLUOCARDENT TRIPLE ACCION x 50cm3                                                             ",
                "ean": "7702560010170"
              },
              {
                "idMaterial": "1101",
                "descMaterial": "(I) - FLUOCARDENT TRIPLE ACCION x 75cm3                                                             ",
                "ean": "7702560011016"
              },
              {
                "idMaterial": "2838",
                "descMaterial": "(I) - GEL ALOE-VIT.A-E PURE PINK x 80                                                               ",
                "ean": "7702560028380"
              },
              {
                "idMaterial": "3080",
                "descMaterial": "(I) - GEL ANTIBACTERIAL NEUTRO x 300ml                                                              ",
                "ean": "7702560030802"
              },
              {
                "idMaterial": "3176",
                "descMaterial": "(I) - GEL ANTIBACTERIAL NEUTRO x 80ml                                                               ",
                "ean": "7702560031762"
              },
              {
                "idMaterial": "3354",
                "descMaterial": "(I) - GINKGO BILOBA FCO x 90 CAPS                                                                   ",
                "ean": "7702560033544"
              },
              {
                "idMaterial": "3112",
                "descMaterial": "(I) - HILO DENTAL FLUOC. MENTA x 25mts                                                              ",
                "ean": "7702560031120"
              },
              {
                "idMaterial": "3182",
                "descMaterial": "(I) - KIT CUIDADO DE LA HERIDA                                                                      ",
                "ean": "7702560031823"
              },
              {
                "idMaterial": "3526",
                "descMaterial": "(I) - KIT CUIDADO ORAL FLUOCARDENT KIDS                                                             ",
                "ean": "7702560035265"
              },
              {
                "idMaterial": "4206",
                "descMaterial": "(I) - KIT ORAL FLUOCARDENT ADULTO                                                                   ",
                "ean": "7702560042065"
              },
              {
                "idMaterial": "3022",
                "descMaterial": "(I) - LOCION LAGE AMARILLA x 350ml                                                                  ",
                "ean": "7702560030222"
              },
              {
                "idMaterial": "2414",
                "descMaterial": "(I) - LOCION LAGE AZUL x 130ml                                                                      ",
                "ean": "7702560024146"
              },
              {
                "idMaterial": "3023",
                "descMaterial": "(I) - LOCION LAGE AZUL x 350ml                                                                      ",
                "ean": "7702560030239"
              },
              {
                "idMaterial": "3086",
                "descMaterial": "(I) - LOCION LAGE VERDE x 350ml                                                                     ",
                "ean": "7702560030864"
              },
              {
                "idMaterial": "3795",
                "descMaterial": "(I) - MALLAESPONJA YES P1 LL2unds                                                                   ",
                "ean": "7702560037955"
              },
              {
                "idMaterial": "3027",
                "descMaterial": "(I) - PAÑITOS HUMEDOS JGB x 20unds                                                                  ",
                "ean": "7702560030277"
              },
              {
                "idMaterial": "3028",
                "descMaterial": "(I) - PAÑITOS HUMEDOS JGB x 40unds                                                                  ",
                "ean": "7702560030284"
              },
              {
                "idMaterial": "3029",
                "descMaterial": "(I) - PAÑITOS HUMEDOS x 80unds                                                                      ",
                "ean": "7702560030291"
              },
              {
                "idMaterial": "3852",
                "descMaterial": "(I) - PAÑO ABSORBENTE YES P1 LL2unds                                                                ",
                "ean": "7702560038525"
              },
              {
                "idMaterial": "3816",
                "descMaterial": "(I) - PAÑO LIMPIADOR YES P6 LL10unds                                                                ",
                "ean": "7702560038167"
              },
              {
                "idMaterial": "3815",
                "descMaterial": "(I) - PAÑO MALLA YES P3 LL4unds                                                                     ",
                "ean": "7702560038150"
              },
              {
                "idMaterial": "3813",
                "descMaterial": "(I) - PAÑO MULTIUSOS YES P1 LL2unds                                                                 ",
                "ean": "7702560038136"
              },
              {
                "idMaterial": "4390",
                "descMaterial": "(I) - PREP.CAJA ECOPITOS BOLSA x 50und                                                              ",
                "ean": "7702560043901"
              },
              {
                "idMaterial": "4680",
                "descMaterial": "(I) - PROLARDII x 10 sachet                                                                         ",
                "ean": "7709137132259"
              }
            ],
            "mensaje": ""
        };

        res.json(codigoEan);

    }
    else if (find === "getcodigoreemplazar") {
        const codigoReemplazar = {
            "estado": 200,
            "id": "",
            "page": 1,
            "cantidad": 10,
            "data": [
              {
                "idMaterial": "4618",
                "descMaterial": "(I) - (A)-AGUA OXIGENADA JGB x 120ml                                                                ",
                "ean": "7702560000010"
              },
              {
                "idMaterial": "4547",
                "descMaterial": "(I) - (A)-AGUA OXIGENADA JGB x 3500ml                                                               ",
                "ean": "7702560010804"
              },
              {
                "idMaterial": "4545",
                "descMaterial": "(I) - (A)-AGUA OXIGENADA JGB x 500ml                                                                ",
                "ean": ""
              },
              {
                "idMaterial": "4672",
                "descMaterial": "(I) - (A)-ANALPER 1% GEL TUBX30G                                                                    ",
                "ean": "7703763992973"
              },
              {
                "idMaterial": "4670",
                "descMaterial": "(I) - (A)-ANALPER GRIP TAB CJA X 10                                                                 ",
                "ean": "7703763995356"
              },
              {
                "idMaterial": "4619",
                "descMaterial": "(I) - (A)-DIOXOGEN LIQUIDO x 120ml                                                                  ",
                "ean": ""
              },
              {
                "idMaterial": "4619",
                "descMaterial": "(I) - (A)-DIOXOGEN LIQUIDO x 120ml                                                                  ",
                "ean": "7702560000027"
              },
              {
                "idMaterial": "4669",
                "descMaterial": "(I) - (A)-HEDRALIV JARABE x 120ML                                                                   ",
                "ean": "7703763993826"
              },
              {
                "idMaterial": "2876",
                "descMaterial": "(I) - (S) ALGODON ZIG ZAG x 250g-PQ x 12                                                            ",
                "ean": ""
              },
              {
                "idMaterial": "4646",
                "descMaterial": "(I) - 2 CITROMEL GTIS 1 ALCOHOL x 120ml                                                             ",
                "ean": "7702560024214"
              },
              {
                "idMaterial": "974",
                "descMaterial": "(I) - ALCOHOL ANTISEPTICO JGB x 350ml                                                               ",
                "ean": ""
              },
              {
                "idMaterial": "974",
                "descMaterial": "(I) - ALCOHOL ANTISEPTICO JGB x 350ml                                                               ",
                "ean": "7702560009532"
              },
              {
                "idMaterial": "973",
                "descMaterial": "(I) - ALCOHOL ANTISEPTICO JGB x 700ml                                                               ",
                "ean": ""
              },
              {
                "idMaterial": "973",
                "descMaterial": "(I) - ALCOHOL ANTISEPTICO JGB x 700ml                                                               ",
                "ean": "7702560009525"
              },
              {
                "idMaterial": "4005",
                "descMaterial": "(I) - ALGODON ARBORA x 75gr                                                                         ",
                "ean": "7704269111004"
              },
              {
                "idMaterial": "3977",
                "descMaterial": "(I) - ALGODON LITTLE ANGELS x 50g                                                                   ",
                "ean": "1013002027677"
              },
              {
                "idMaterial": "29",
                "descMaterial": "(I) - ALGODON POMOS JGB x 40g                                                                       ",
                "ean": "7702560000294"
              },
              {
                "idMaterial": "2801",
                "descMaterial": "(I) - ALGODON POMOS PARA BEBE JGB x 40g                                                             ",
                "ean": "7702560028014"
              },
              {
                "idMaterial": "4415",
                "descMaterial": "(I) - ANALPER SPRAY  1% X 90ML                                                                      ",
                "ean": "7703763996735"
              },
              {
                "idMaterial": "2734",
                "descMaterial": "(I) - BIOTINA x 60 CAPS                                                                             ",
                "ean": "7702560027345"
              },
              {
                "idMaterial": "3821",
                "descMaterial": "(I) - BLANQ. YES FLORAL P1800 LL2200cc                                                              ",
                "ean": "7702560038211"
              },
              {
                "idMaterial": "3822",
                "descMaterial": "(I) - BLANQ. YES LAVANDA P1800 LL2200cc                                                             ",
                "ean": "7702560038228"
              },
              {
                "idMaterial": "3845",
                "descMaterial": "(I) - BLANQ.“AGENTE X” TRAD 2lts(5.25%)                                                             ",
                "ean": "7704269114715"
              },
              {
                "idMaterial": "2338",
                "descMaterial": "(I) - BLANQ.TRADICIONAL P900 LL1000                                                                 ",
                "ean": "7702560023385"
              },
              {
                "idMaterial": "1149",
                "descMaterial": "(I) - BLANQ.YES TRADICIONAL x 1000cc                                                                ",
                "ean": "7702560011498"
              },
              {
                "idMaterial": "2950",
                "descMaterial": "(I) - BLANQUEADOR YES CITRICA x 1000cc                                                              ",
                "ean": "7702560029509"
              },
              {
                "idMaterial": "3178",
                "descMaterial": "(I) - BLANQUEADOR YES FLORAL x 450cc                                                                ",
                "ean": "7702560031786"
              },
              {
                "idMaterial": "3399",
                "descMaterial": "(I) - BOLSA BLANQ. YES TRADICIONAL 700cc                                                            ",
                "ean": "7702560033995"
              },
              {
                "idMaterial": "3224",
                "descMaterial": "(I) - BRONQ. SPRAY GARGANTA UVA x 120ml                                                             ",
                "ean": "7702560032240"
              },
              {
                "idMaterial": "4572",
                "descMaterial": "(I) - BRONQUISOL FLEM ADULTO x 120ml                                                                ",
                "ean": "7709031877591"
              },
              {
                "idMaterial": "4633",
                "descMaterial": "(I) - BRONQUISOL UNGUENTO x 19g                                                                     ",
                "ean": "7702560000140"
              },
              {
                "idMaterial": "4405",
                "descMaterial": "(I) - BUCOXOL TRIP ACCI FRUT ROJ X120ML                                                             ",
                "ean": "7703763997008"
              },
              {
                "idMaterial": "4406",
                "descMaterial": "(I) - BUCOXOL TRIP ACCI MIEL LIM X 120ML                                                            ",
                "ean": "7703763996995"
              },
              {
                "idMaterial": "3488",
                "descMaterial": "(I) - CAJA T.ROJO FRESA x 380g P32 LL36                                                             ",
                "ean": "7702560034886"
              },
              {
                "idMaterial": "1093",
                "descMaterial": "(I) - CEPILLO DENTAL FLUOCARDENT FLEX                                                               ",
                "ean": "7702560010934"
              },
              {
                "idMaterial": "177",
                "descMaterial": "(I) - CEPILLO DIAMANTE ADULTO                                                                       ",
                "ean": "7702560001772"
              },
              {
                "idMaterial": "3756",
                "descMaterial": "(I) - CEPILLO FLUOC. FLEX PACK x 2unds                                                              ",
                "ean": "7702560037566"
              },
              {
                "idMaterial": "3802",
                "descMaterial": "(I) - CEPILLO FLUOCARDENT NIÑO AVENGERS                                                             ",
                "ean": "7702560038020"
              },
              {
                "idMaterial": "2550",
                "descMaterial": "(I) - CEPILLO FLUOCARDENT SENSITIVE                                                                 ",
                "ean": "7702560021015"
              },
              {
                "idMaterial": "4359",
                "descMaterial": "(I) - CEPILLO PREV.CARIES PACK x 3unds                                                              ",
                "ean": "7702560043598"
              },
              {
                "idMaterial": "3358",
                "descMaterial": "(I) - CHICOS CHOCOLATE SOBRE x 20g                                                                  ",
                "ean": "7702560033582"
              },
              {
                "idMaterial": "1368",
                "descMaterial": "(I) - CONDON MYSTIC EXTREMO x 3und                                                                  ",
                "ean": "7702560013683"
              },
              {
                "idMaterial": "3024",
                "descMaterial": "(I) - CONDON MYSTIC SURTIDO P14 LL20                                                                ",
                "ean": "7702560030246"
              },
              {
                "idMaterial": "3025",
                "descMaterial": "(I) - CONDON MYSTIC SURTIDO P40 LL60                                                                ",
                "ean": "7702560030253"
              },
              {
                "idMaterial": "4004",
                "descMaterial": "(I) - COPITOS ARBORA x 125unds                                                                      ",
                "ean": "7704269109636"
              },
              {
                "idMaterial": "3976",
                "descMaterial": "(I) - COPITOS LITTLE ANGELS x 100unds                                                               ",
                "ean": "1013002027554"
              },
              {
                "idMaterial": "3910",
                "descMaterial": "(I) - CREMA ARNICA CASA NATURA x 60gr                                                               ",
                "ean": "7702560039102"
              },
              {
                "idMaterial": "3873",
                "descMaterial": "(I) - CURITAS STANDARD JGB x 100unds                                                                ",
                "ean": "7702560038730"
              },
              {
                "idMaterial": "3871",
                "descMaterial": "(I) - CURITAS STANDARD JGB x 10unds                                                                 ",
                "ean": "7702560038716"
              },
              {
                "idMaterial": "2777",
                "descMaterial": "(I) - DESMANCHADOR YES R.BLANCA x 1000cc                                                            ",
                "ean": "7702560027772"
              },
              {
                "idMaterial": "718",
                "descMaterial": "(I) - DIOXODIN BUCOFARINGEO x 120ml                                                                 ",
                "ean": "7702560007187"
              },
              {
                "idMaterial": "1044",
                "descMaterial": "(I) - DIOXODIN ESPUMA GALON x 3500ml                                                                ",
                "ean": "7702560010446"
              },
              {
                "idMaterial": "716",
                "descMaterial": "(I) - DIOXODIN ESPUMA x 120ml                                                                       ",
                "ean": "7702560007163"
              },
              {
                "idMaterial": "715",
                "descMaterial": "(I) - DIOXODIN ESPUMA x 60ml                                                                        ",
                "ean": "7702560007156"
              },
              {
                "idMaterial": "4640",
                "descMaterial": "(I) - DIOXODIN SOLUCION GALON x 3500ml                                                              ",
                "ean": "7702560010415"
              },
              {
                "idMaterial": "2898",
                "descMaterial": "(I) - DUOPACK ESPUMA DE AFEITAR                                                                     ",
                "ean": "7702560028984"
              },
              {
                "idMaterial": "2340",
                "descMaterial": "(I) - ENJUAGUE ADULTO MENTA FRESCAx600ml                                                            ",
                "ean": "7702560023408"
              },
              {
                "idMaterial": "3567",
                "descMaterial": "(I) - ENJUAGUE ADULTO MENTA FRIA x 46ml                                                             ",
                "ean": "7702560035678"
              },
              {
                "idMaterial": "3363",
                "descMaterial": "(I) - ESPUMA CLASICA GTS T.ACCION x 50                                                              ",
                "ean": "7702560033636"
              },
              {
                "idMaterial": "3783",
                "descMaterial": "(I) - FIBRA ABRASIVA REGULAR YES x 3unds                                                            ",
                "ean": "7702560037832"
              },
              {
                "idMaterial": "3978",
                "descMaterial": "(I) - FIBRA CASA NATURA x 400g                                                                      ",
                "ean": "7702560039782"
              },
              {
                "idMaterial": "82",
                "descMaterial": "(I) - FLUOCARDENT MENTA x 75cm3                                                                     ",
                "ean": "7702560000829"
              },
              {
                "idMaterial": "643",
                "descMaterial": "(I) - FLUOCARDENT NIÑOS x 50cm3                                                                     ",
                "ean": "7702560006432"
              },
              {
                "idMaterial": "2260",
                "descMaterial": "(I) - FLUOCARDENT SENSITIVE x 50ml                                                                  ",
                "ean": "7702560022609"
              },
              {
                "idMaterial": "1018",
                "descMaterial": "(I) - FLUOCARDENT TRIPLE ACCION x 100cm3                                                            ",
                "ean": "7702560010187"
              },
              {
                "idMaterial": "3840",
                "descMaterial": "(I) - FLUOCARDENT TRIPLE ACCION x 45cm3                                                             ",
                "ean": "7702560038402"
              },
              {
                "idMaterial": "1017",
                "descMaterial": "(I) - FLUOCARDENT TRIPLE ACCION x 50cm3                                                             ",
                "ean": "7702560010170"
              },
              {
                "idMaterial": "1101",
                "descMaterial": "(I) - FLUOCARDENT TRIPLE ACCION x 75cm3                                                             ",
                "ean": "7702560011016"
              },
              {
                "idMaterial": "2838",
                "descMaterial": "(I) - GEL ALOE-VIT.A-E PURE PINK x 80                                                               ",
                "ean": "7702560028380"
              },
              {
                "idMaterial": "3080",
                "descMaterial": "(I) - GEL ANTIBACTERIAL NEUTRO x 300ml                                                              ",
                "ean": "7702560030802"
              },
              {
                "idMaterial": "3176",
                "descMaterial": "(I) - GEL ANTIBACTERIAL NEUTRO x 80ml                                                               ",
                "ean": "7702560031762"
              },
              {
                "idMaterial": "3354",
                "descMaterial": "(I) - GINKGO BILOBA FCO x 90 CAPS                                                                   ",
                "ean": "7702560033544"
              },
              {
                "idMaterial": "3112",
                "descMaterial": "(I) - HILO DENTAL FLUOC. MENTA x 25mts                                                              ",
                "ean": "7702560031120"
              },
              {
                "idMaterial": "3182",
                "descMaterial": "(I) - KIT CUIDADO DE LA HERIDA                                                                      ",
                "ean": "7702560031823"
              },
              {
                "idMaterial": "3526",
                "descMaterial": "(I) - KIT CUIDADO ORAL FLUOCARDENT KIDS                                                             ",
                "ean": "7702560035265"
              },
              {
                "idMaterial": "4206",
                "descMaterial": "(I) - KIT ORAL FLUOCARDENT ADULTO                                                                   ",
                "ean": "7702560042065"
              },
              {
                "idMaterial": "3022",
                "descMaterial": "(I) - LOCION LAGE AMARILLA x 350ml                                                                  ",
                "ean": "7702560030222"
              },
              {
                "idMaterial": "2414",
                "descMaterial": "(I) - LOCION LAGE AZUL x 130ml                                                                      ",
                "ean": "7702560024146"
              },
              {
                "idMaterial": "3023",
                "descMaterial": "(I) - LOCION LAGE AZUL x 350ml                                                                      ",
                "ean": "7702560030239"
              },
              {
                "idMaterial": "3086",
                "descMaterial": "(I) - LOCION LAGE VERDE x 350ml                                                                     ",
                "ean": "7702560030864"
              },
              {
                "idMaterial": "3795",
                "descMaterial": "(I) - MALLAESPONJA YES P1 LL2unds                                                                   ",
                "ean": "7702560037955"
              },
              {
                "idMaterial": "3027",
                "descMaterial": "(I) - PAÑITOS HUMEDOS JGB x 20unds                                                                  ",
                "ean": "7702560030277"
              },
              {
                "idMaterial": "3028",
                "descMaterial": "(I) - PAÑITOS HUMEDOS JGB x 40unds                                                                  ",
                "ean": "7702560030284"
              },
              {
                "idMaterial": "3029",
                "descMaterial": "(I) - PAÑITOS HUMEDOS x 80unds                                                                      ",
                "ean": "7702560030291"
              },
              {
                "idMaterial": "3852",
                "descMaterial": "(I) - PAÑO ABSORBENTE YES P1 LL2unds                                                                ",
                "ean": "7702560038525"
              },
              {
                "idMaterial": "3816",
                "descMaterial": "(I) - PAÑO LIMPIADOR YES P6 LL10unds                                                                ",
                "ean": "7702560038167"
              },
              {
                "idMaterial": "3815",
                "descMaterial": "(I) - PAÑO MALLA YES P3 LL4unds                                                                     ",
                "ean": "7702560038150"
              },
              {
                "idMaterial": "3813",
                "descMaterial": "(I) - PAÑO MULTIUSOS YES P1 LL2unds                                                                 ",
                "ean": "7702560038136"
              },
              {
                "idMaterial": "4390",
                "descMaterial": "(I) - PREP.CAJA ECOPITOS BOLSA x 50und                                                              ",
                "ean": "7702560043901"
              },
              {
                "idMaterial": "4680",
                "descMaterial": "(I) - PROLARDII x 10 sachet                                                                         ",
                "ean": "7709137132259"
              }
            ],
            "mensaje": ""
        };

        res.json(codigoReemplazar);

    }
    else {
        res.send("'find' No encontrado");
    }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})