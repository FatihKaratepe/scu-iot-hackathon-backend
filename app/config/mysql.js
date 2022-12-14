const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'rootUser',
    password: 'RootPass1234',
    database: 'jetzendb'
});

module.exports = connection;