const readXlsxFile = require('read-excel-file/node');
const mysql = require('mysql');
readXlsxFile('./\sv.xlsx').then((rows) => {
    // `rows` is an array of rows
    rows.shift();
    var config = require('./config');
    var connection = mysql.createConnection(config);

    connection.connect((error) => {
        if (error) {
            console.error(error);
        } else {
            let insert1 = 'SET FOREIGN_KEY_CHECKS=0';
            let insert2 = 'INSERT INTO sv(msv,danhsachsv_mds,mk,ten,ngaysinh,mamonthi,tinhtrang,macathi) VALUES ? ';
            let del1 = 'SET SQL_SAFE_UPDATES=0';
            let del2 = 'DELETE FROM sv';
            
            connection.query(del1,(error, results, fields) => {
                if (error) {
                    return console.error(error.message);
                }
            });
            connection.query(del2,(error, results, fields) => {
                if (error) {
                    return console.error(error.message);
                }
                console.log(results)
            });
            connection.query(insert1, [rows], (error, results, fields) => {
                if (error) {
                    return console.error(error.message);
                }
            });
            connection.query(insert2, [rows], (error, results, fields) => {
                if (error) {
                    return console.error(error.message);
                }
                console.log(results);
            });
            connection.end();
        }
    });
})

