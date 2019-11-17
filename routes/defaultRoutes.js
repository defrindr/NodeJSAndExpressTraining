var ex = require("express"),
    defaultController = require('../controllers/defaultController');
var router = ex.Router();

let auth = function (req, res, next) {
    if (req.session.name != null && req.session.role != null)
        return next();
    else
        return res.redirect("/login")
}

router.get('/',auth,defaultController.index)

router.get('/waktu',auth,defaultController.waktu)

router.get("/login", defaultController.get_login)

router.post("/login",defaultController.post_login)

router.get("/logout",auth,defaultController.logout)

module.exports = router