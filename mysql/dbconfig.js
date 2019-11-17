var mysql = require('mysql');


var conn = mysql.createConnection({
    host: "localhost",
    user: "defri",
    password: "defrindr",
    database : "rpla",
});
conn.connect(function(err){
    if(err) throw err
})
module.exports = conn;