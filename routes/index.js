const express = require('express');
const router = express.Router();


router.get('/' , () => {
    res.send('Lucrecia chavarrio');
});




module.exports = router;