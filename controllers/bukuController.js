'use strict';

const conn = require('../mysql/dbconfig');

exports.buku = function (err, res) {
    conn.query("select * from buku", function (err1, rows, field) {
        if (err1)
            throw err1
        else
            res.render("buku", {
                data: rows
            });
    })
}