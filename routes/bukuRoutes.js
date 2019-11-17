const ex = require('express'),
    mysqlController = require('../controllers/bukuController');

let router = ex.Router();

let auth = function (req, res, next) {
    if (req.session.name != null && req.session.role != null)
        return next();
    else
        return res.redirect("/login")
}
router.get('/buku',auth,mysqlController.buku)

module.exports = router