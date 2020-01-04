var express    = require('express'),
    mysql      = require('mysql'),
    http       = require('http'),
    bodyParser = require('body-parser');


    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'mydb'
    });
    var app = express();
    
    app.use(bodyParser());
    
    app.get('/', function(req, res) {
    res.sendFile('/index.html' , { root : __dirname});
});
app.post('/user', function (req, res) {
    connection.query('INSERT INTO members SET ?', req.body, 
        function (err, result) {
            if (err) throw err
            res.send('Record inserted successfully:');
        }); 
    });
    
app.listen(3000);
console.log("Express server listening on port 3000");
