const db = require('../../config/db');
const upFilm = (req, response) => {
const { body, params } = req;
    
const queryGet = `select * from film where id=${params.id}`;

    db.query(queryGet, (err, res) => {
        if (err) {
            const respondData = {
                message: "Gagal get film"
            };
            return response.status(500).json(respondData).end();
        }


const query = `UPDATE film SET judul=?, tahun=?, rilis=?, sutradara=?, bahasa=?, gambar=?, deskripsi=? where id =?`;
const data = [
    body.judul || res[0].judul,
    body.tahun || res[0].tahun, 
    body.rilis || res[0].rilis,
    body.sutradara || res[0].sutradara,
    body.bahasa || res[0].bahasa,
    body.gambar || res[0].gambar,
    body.deskripsi || res[0].deskripsi,
    params.id
];
        db.query(query, data, (error, res) => {
            if(error) {
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

    });

};

module.exports = upFilm;