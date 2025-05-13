const express = require('express')
const router = express.Router();
const checkUrlController = require('../controller/checkUrlController')


router.post('/check-url', checkUrlController.checkUrl);

module.exports = router;