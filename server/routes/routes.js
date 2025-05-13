const express = require('express')
const router = express.Router();
const checkUrlController = require('../controller/checkUrlController')


router.post('/check-url', checkUrlController.checkUrl);

router.get('/', (req, res) => {
    res.send("<h1> Holy Shit!</h1>")
})
module.exports = router;