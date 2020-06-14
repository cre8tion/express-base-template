const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
import config from './config'
import routes from './api'

async function startServer(){
    const app = express()

    // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    // It shows the real origin IP in the heroku or Cloudwatch logs
    app.enable('trust proxy');

    // Enable ALL CORS Requests (For development)
    app.use(cors())
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
    app.use(bodyParser.json())


    // Example GET method
    app.get('/', (req, res) => res.send('Hello World!'))

    // Import Routes from Router
    app.use(config.api.prefix, routes());


    /// catch 404 and forward to error handler
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    // Start Express Server
    app.listen(config.port, () => console.log(`Example app listening at http://localhost:${config.port}`))
}

startServer();
