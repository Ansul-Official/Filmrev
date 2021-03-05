const db = require('../../config/db');

const delFilm = (required, response) => {
const { body, params } = required;
const query = `delete from film where id=${params.id}`;
    db.query(query, (err, res) => {
        if(err) {
            const respondData = {
                message: 'Gagal terkoneksi'
            };
            return response.status(500).json(respondData).end();
        }
        
        const respondData = {message: 'Berhasil dihapus'}
        return response.status(200).json(respondData).end();
    });
};

module.exports = delFilm;