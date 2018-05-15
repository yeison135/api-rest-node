'use strict'

function consultarZonasCarga(req, res) {
    let peticion = req.body;
    if(peticion && peticion.nroDocumento && peticion.tipoDocumento) {
        res.status(200).json({
                zona : "zona",
                puntos : [
                    {
                        nroComparendo : "111",
                        codigoInfraccion : "02",
                        placa : "AAA111",
                        valor : 123000
                    },
                    {
                        nroComparendo : "123",
                        codigoInfraccion : "01",
                        placa : "BBB222",
                        valor : 678000
                    }
                ] 
            });
    } else {
        res.status(400).json("Datos de consulta incorrectos.");
    }
}

module.exports = {
    consultarZonasCarga
}