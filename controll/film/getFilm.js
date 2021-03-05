const db = require('../../config/db');
const getFilm = (req, response) => {
    // Respond Text
    // return res.end('Hello World!');
const query = 'select * from film';
    db.query(query, (err, res) => {
        if(err) {
            const respondData = {
                message: 'Gagal terkoneksi'
            };
            return response.status(500).json(respondData).end();
        }
        
        const respondData = res;
        return response.status(200).json(respondData).end();
    });

    // const data = [{
    //     "id":1,
    //     "judul":"Doraemon 2",
    //     "tahun":"2020",
    //     "rilis":"13 Februari 2021",
    //     "sutradara":"Takashi Yamazaki, Ryuichi Yagi",
    //     "bahasa":"bahasa jepang",
    //     "gambar":"https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Stand_by_Me_Doraemon_2.jpg/220px-Stand_by_Me_Doraemon_2.jpg",
    //     "deskripsi":"film animasi pencitraan hasil komputer Jepang yang akan ditayangkan pada tahun 2020. Film ini diangkat dari seri manga Doraemon dan merupakan sekuel dari Stand by Me Doraemon Film ini disutradarai oleh Ryūichi Yagi dan Takashi Yamazaki. Rencananya film ini direncanakan rilis perdana pada tanggal 7 Agustus 2020, tetapi karena adanya Pandemi COVID-19, film ini dihapus sementara dari jadwal rilis, dan digantikan oleh Doraemon: Dinosaurus Baru Nobita (yang telah ditunda dari rilis Maret sebelumnya) di slot teatrikalnya. Film ini akan ditunda sampai 20 November 2020."
    // },
    // {
    //     "id":2,
    //     "judul":"Doraemon 1",
    //     "tahun":"2014",
    //     "rilis":"08 Agustus 2014",
    //     "sutradara":"Takashi Yamazaki, Ryuichi Yagi",
    //     "bahasa":"bahasa jepang",
    //     "gambar":"https://upload.wikimedia.org/wikipedia/id/thumb/0/01/Stand_by_Me_Doraemon_official_poster.jpg/220px-Stand_by_Me_Doraemon_official_poster.jpg",
    //     "deskripsi":"adalah film animasi pencitraan hasil komputer Jepang tahun 2014. Film ini diadaptasi dari serial manga Doraemon. Film yang disutradarai oleh Takashi Yamazaki dan Ryūichi Yagi. Film ini akan dirilis pada tanggal 8 Agustus 2014 oleh Walt Disney International Japan. Film ini menceritakan bagaimana Doraemon harus meninggalkan sahabat terbaiknya."
    // }];
  };

module.exports = getFilm;