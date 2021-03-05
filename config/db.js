const mysql = require('mysql');

const dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'filmrev',
});

dbConnect.connect((err) => {
    if (err) {
        console.log('Koneksi ke database error!!');        
        throw err;
    }
    console.log('Koneksi ke database sukses!!')
});

module.exports = dbConnect;