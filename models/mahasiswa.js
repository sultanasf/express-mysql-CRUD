const pool = require('../config/db')

const getAllmhs = () => {
    const query = `SELECT * FROM mhs`

    return pool.execute(query)
}

const addMhs = (body) => {
    const query = `INSERT INTO mhs (Nama, NRP, JenisKelamin, Prodi) VALUES ('${body.nama}', '${body.nrp}', '${body.jenisKelamin}', '${body.prodi}')`

    return pool.execute(query)
}

const editMhs = (id, body) => {
    const query = `UPDATE mhs SET Nama='${body.nama}',NRP='${body.nrp}',JenisKelamin='${body.jenisKelamin}',Prodi='${body.prodi}' WHERE id = ${id}`

    return pool.execute(query)
}

const deleteMhs = (id) => {
    const query = `DELETE FROM mhs WHERE id = ${id}`

    return pool.execute(query)
}

module.exports = {
    getAllmhs,
    addMhs,
    editMhs,
    deleteMhs
}