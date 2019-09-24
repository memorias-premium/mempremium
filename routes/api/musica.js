/**
 * API para obtener todas las direcciones de la musica
 * Tambien para pasar las direcciones de las canciones que queremos copiar al
 * script de .sh
 */
const { exec } = require('child_process');
const express = require('express');
const router = express.Router();


// @route   GET api/categoria
// @desc    Get All categoria
// @access  Public
router.get('/', (req, res)=>{
    // Cambiar la ruta en el comando por el disco duro y las carpetas
    exec(`tree -J ~/Música | jq `, (error, stdout, stderr) =>{
        // Obtenemos todo el path de la musica
        let nombres = JSON.parse(JSON.stringify(eval(stdout)))[0]
            .contents.map(item => item.name);
        res.send(nombres);
    });
});


// @route   POST api/categoria
// @desc    POST All categoria
// @access  Public
router.post('/', (req, res) => {
    //Mandamos las rutas al codigo bash para empezar a copiar
    res.send(req.body.direcciones);
});


module.exports = router;