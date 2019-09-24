/**
 * API solamente para recibir informacion sobre las memorias conectadas en el server
 */

const {exec} = require('child_process');
const express = require('express');
const router = express.Router();

// @route   GET api/usb
// @desc    Get All usbs
// @access  Public
router.get('/', (req,res) =>{
    exec('lsblk -Jo NAME,SIZE,RM', (error, stdout, stderr)=>{
        let usb = JSON.parse(stdout).blockdevices.filter( item => item.rm === true );
        res.send(usb);
    });
});


module.exports = router;