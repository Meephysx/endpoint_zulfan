const mysql = require('mysql');

const db = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'mahasiswa_db'
}); 

db.connect((err) => {
    if (err) {
        console.error('Kesalahan saat menyambung ke database:', err);
    } else {
        console.log('Terhubung ke database');
    }
});

module.exports = db;