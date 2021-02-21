const express = require('express');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        this.routes();


    }

    middlewares() {
        this.app.use(express.static('public'))
    }

    routes() {

        this.app.get('/api', (req, res) => {
            res.json({
                msg: 'get api'
            })
        });

        this.app.put('/api', (req, res) => {
            res.json({
                msg: 'put api'
            })
        });

        this.app.post('/api', (req, res) => {
            res.json({
                msg: 'post api'
            })
        });

        this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'delete api'
            })
        });
    }

    listen() {
        this.app.listen( this.port , () => {
            console.log('running on port', this.port)
        });
    }
}

module.exports = Server;