const db = require('../models')
const {Router} = require('express'); 
const router = Router();

router.get('/', (req, res) => {
    res.send({message: 'Hello ADSI !!!!!'});
});

module.exports = router;