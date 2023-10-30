/* Imports */

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const config = require('./config')



const app = express()

//Config json

app.use(cors(config.corsOptions));
app.use(express.json({ limit: '200kb' }));
app.use(express.urlencoded({ extended: false }));

app.use((error, req, res, next) => {
  if (error.message === 'request entity too large') {
    return res.status(413).json({ message: 'Requisição maior que 100KB' });
  } else {
    next();
  }
});

// Models

const User = require('./models/User')

//Credenciais de usuario
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS



require('./routes/user')(app);
require('./routes/login')(app);



//Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.DB_ACCESS}`, { useNewUrlParser: true }).then(()=>{
    app.listen(3000, ()=>{
        console.log("Banco de dados conectado!")
    })
}).catch((err)=>{
    console.log("Houve um erro ao se conectar ao banco:" +err)
})

module.exports = app