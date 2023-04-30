const express = require('express')
const mahasiswaController = require('../controller/mahasiswa')
const router = express.Router()

router.get('/', mahasiswaController.getAllMhs)
router.post('/', mahasiswaController.addMhs)
router.post('/:id', mahasiswaController.editMhs)
router.get('/:id', mahasiswaController.deleteMhs)

module.exports = router