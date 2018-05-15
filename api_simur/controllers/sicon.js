'use strict'

function consultarComparendos(req, res) {
    let peticion = req.body;
    if(peticion && peticion.nroDocumento && peticion.tipoDocumento) {
        res.status(200).json({
                nroDocumento : peticion.nroDocumento,
                tipoDocumento : peticion.tipoDocumento,
                nombres : "Pedro",
                apellidos : "Perez",
                comparendos : [
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
    consultarComparendos
}