const express = require('express');
const router = express.Router();
const checkUrlController = require('../controller/checkUrlController');

router.post('/check-url', checkUrlController.checkUrl);

router.get('/', (req, res) => {
    res.json('Holy Shit!');
});
module.exports = router;
