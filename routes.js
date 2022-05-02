const express = require('express');
const controller = require('./controller')
const router = express.Router();

router.get('/a', (req, res) => {                  //test route to check server setup
    res.status(200).send({a: 'abc'})
})

// router.get('/check-balance/:accNum', controller.checkBalance);
router.post('/create-account', controller.createAccount);
// router.post('/remove-account', controller.removeAccount);
// router.post('/transfer-money', controller.transferMoney);

module.exports = router;