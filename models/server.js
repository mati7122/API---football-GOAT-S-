
const express = require('express');
require('dotenv').config();
require('hbs');

const ConnectionToDB = require('../database/connection');
//Pull the function to connect to my Database MySQL

class Server {
    constructor() {
        this.PORT = process.env.PORT || 8080;
        this.app = express();
        this.app.use(express.text());
        this.app.use(express.json());

        this.Middlewares();
        this.Routes();
        this.ConnectToDB();
    }

    Middlewares() {
        this.app.set('view engine', 'hbs');
    }

    Routes() {
        this.app.use('/', require('../routes/webserver.js'));
        this.app.use('/crud', require('../routes/crud.methods'));
    }

    ConnectToDB() {
        ConnectionToDB();
    }

    Connection() {
        this.app.listen(this.PORT, () => {
            console.log('Running in port ', this.PORT);
        })
    }
}

module.exports = Server