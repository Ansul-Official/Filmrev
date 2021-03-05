const db = require('../../config/db');
const setFilm = (req, response) => {
const query = 'INSERT INTO film set ?';
const { body } = req;
    db.query(query, body, (err, res) => {
        if(err) {
            const respondData = {
                message: 'Gagal terkoneksi'
            };
            return response.status(500).json(respondData).end();
        }
        const respondData = {
            message: 'Berhasil'
        };
        return response.status(201).json(respondData).end();
    });
  };

module.exports = setFilm;