const connection = require('../config/mysql');

exports.deneme = async () => {
    let sqlSorgusu = `SELECT (2 + 3) AS sonuc`;
    connection.query(sqlSorgusu, function (err, results, fields) {
        if (err) throw err;
        console.log(JSON.parse(JSON.stringify(results)));
    });
}
