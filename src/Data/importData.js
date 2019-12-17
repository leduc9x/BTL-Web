
const readXlsxFile = require('read-excel-file/node');
const mysql = require('mysql');
 
// File path.
readXlsxFile('../\Data\\customers.xlsx').then((rows) => {
  // `rows` is an array of rows
  console.log(rows);
  rows.shift();
  // each row being an array of cells.

    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
  });
 
  connection.connect((error) => {
    if (error) {
      console.error(error);
    } else {
      // let query = 'INSERT INTO customer (id, address, name, age) VALUES ?';
      let query = 'select * from customer';
      connection.query(query, [rows], (error, response) => {
        console.log(response);
      });
    }
  });
})




