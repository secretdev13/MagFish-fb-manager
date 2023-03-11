const express = require('express')
const router = express.Router()
const soController = require('../controllers/soController')

router.post('/update_po', soController.updatePo)

module.exports = router