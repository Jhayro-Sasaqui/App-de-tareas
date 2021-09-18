//vamos a requerir express para crear rutas
const express = require('express');
//utilizaremos desde express un método llamado router
const router = express.Router();
//el método router nos va a devolver un objeto para ingresar rutas

router.get('/', (req, res) => {
   // res.send('debe enviar esto al DOCUMENT<br>era al document, lo sabía :)');
    res.json({
        status: 'La API esta trabajando!'
    });
});

module.exports = router;