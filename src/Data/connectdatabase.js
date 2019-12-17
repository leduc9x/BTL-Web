const mysql = require('mysql');

const sv = { tk: 'sv1', mk: '1' }
// khoi tao ket noi
// const connection = require('./config');
var config = require('./config');
var connection = mysql.createConnection(config);

//cau lenh truy van
var sql = "SELECT msv, mk FROM sv union select tk, mk from quantri";
// var quantri = " select tk, mk from quantri";
//Tra ket qua truy van
connection.query(sql, (error, results, fields) => {
    if (error) {
        return console.error(error.message);
    }
    Object.keys(results).forEach(function (key) {
        var row = results[key];
        console.log(row)
        if (row.msv === sv.tk && row.mk === sv.mk)
            console.log('sinh vien');
        else if (row.msv === "admin" && row.mk === "admin")
            console.log('quan tri');
        else console.log('false');
    });
});
//Dong ket noi
connection.end();
// console.log(row);
