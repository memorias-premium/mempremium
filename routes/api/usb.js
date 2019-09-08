const {exec} = require('child_process');
const express = require('express');
const router = express.Router();

// @route   GET api/usb
// @desc    Get All usbs
// @access  Public
router.get('/', (req,res) =>{
    exec('lsblk -Jo NAME,SIZE,HOTPLUG', (error, stdout, stderr)=>{
        let usb = JSON.parse(stdout).blockdevices.filter( item => item.hotplug === true );
        res.send(usb);
    });
});


module.exports = router;