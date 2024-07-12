const mysql = require('mysql');

const connection = mysql.createConnection({
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'seq_basics',
    dialect: 'mysql',
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }

  connection.query('SELECT * FROM products', function(error, results, fields) {
    if (error) {
      console.error('Error executing query:', error);
      return;
    }

    console.log('Users:', results);
  });

  connection.end();
});