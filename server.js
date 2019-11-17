const express = require('express'),
        bp = require("body-parser"),
        port = process.env.PORT || 3000,
        session = require("express-session"),
        mysqlRoutes = require('./routes/bukuRoutes')
        defaultRouter = require('./routes/defaultRoutes');

const app = express()

// setting up server
app.set("view engine","pug")

app.use(session({
    secret: "IniSangatRahasia",
    resave: true,
    saveUninitialized: false
}))
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

// enable assets
app.use(express.static('public'))


// Route
app.use("/",defaultRouter)
app.use('/',mysqlRoutes)


// Running Server
app.listen(port,()=>{
    console.log("Server running on http://localhost:"+port+" ...")
})