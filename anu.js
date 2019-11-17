const conn = require('./mysql/dbconfig')
db = conn("information_schema")
a = db.connect(function(err){
    console.log(db.query("select distinct(column_name) from columns where table_schema = 'rpla' and table_name='buku';",(err,res)=>{
        if(err) throw err
        // console.log("TCL: res", res)
        // itRes = res;
        // return itRes;
        return res;
    }))
    db.end()
})
console.log(a)