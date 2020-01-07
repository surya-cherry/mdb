const express = require('express')
const app = express()
var cors = require('cors')

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bidshift',
    database: 'mmdb'
});


app.use(cors());
app.use(express.static('thumbnails'));
require('./fun')(app, connection);
app.listen(3000)