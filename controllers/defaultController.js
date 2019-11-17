const md5 = require('md5');

// Route /
exports.index = function (req, res) {
    let name = req.session.name;
    console.log(name)
    res.render("index",{user:name})
}

// Route /waktu
exports.waktu = function (req, res) {
    res.render("waktuSekarang")
}

exports.get_login = function (req, res) {
    if (req.session.name != null) {
        res.send("You are already logged in");
    } else {
        res.render("login")
    }
}
exports.post_login = function (req, res) {
    let mysql = require('../mysql/dbconfig');
    let user = req.body.username;
    let password = req.body.password;

    mysql.query("select * from user where username='"+user+"' and password='"+md5(password)+"'",(err,rows)=>{
        if(rows == ""){
            res.render("login", {
                err: "Username / Password salah"
            })
        }else{
            rows.forEach(row => {
                req.session.name = row.username;
                req.session.role = "admin";
                res.redirect("/")
            });
        }
        // rows.forEach(row => {
        //     console.log(row.id != )
        // });
        // res.send("<br>" + md5(password) + "<br>" + password + "<br>" + user)
    })
    // if (user == "admin" && password == "admin1234") {
    //     req.session.name = user;
    //     req.session.role = "admin";
    //     res.redirect("/")
    // } else {
    //     res.render("login", {
    //         err: "Username / Password salah"
    //     })
    // }
}

exports.logout = function (req, res) {
    req.session.destroy();
    res.redirect("/login")
}