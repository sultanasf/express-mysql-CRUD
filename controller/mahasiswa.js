const { error } = require('console')
const mahasiswaModels = require('../models/mahasiswa')

const getAllMhs = async (req, res) => {
    try {
        const [data] = await mahasiswaModels.getAllmhs()

        res.json({
            message: 'Get mahasiswa success',
            data: data
        })
    } catch (error) {
        res.status(500).json({ message: 'Connection to database error' })
        console.log(error)
    }
}

const addMhs = async (req, res) => {
    try {
        await mahasiswaModels.addMhs(req.body)
        res.json({
            message: 'Add mahasiswa success',
            data: req.body,
        })
    } catch (error) {
        res.status(500).json({ message: 'Connection to database error' })
        console.log(error)
    }
}

const editMhs = async (req, res) => {
    try {
        await mahasiswaModels.editMhs(req.params.id, req.body)
        res.json({
            message: `Mahasiswa with id ${req.params.id} updated`,
            data: req.body,
        })
    } catch (error) {
        res.status(500).json({ message: 'Connection to database error' })
        console.log(error)
    }
}

const deleteMhs = async (req, res) => {
    try {
        await mahasiswaModels.deleteMhs(req.params.id)
        res.json({
            message: `Mahasiswa with id ${req.params.id} deleted`
        })
    } catch (error) {
        res.status(500).json({ message: 'Connection to database error' })
        console.log(error)
    }
}

module.exports = {
    getAllMhs,
    addMhs,
    editMhs,
    deleteMhs,
}