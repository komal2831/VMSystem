import mysql from 'mysql';

const mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'vmsystem',
    multipleStatements : true,
    port : 3306
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log('Connaction failed');
    }else{
        console.log('Connected');
    }
});

export default mysqlConnection;