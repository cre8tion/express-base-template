require('dotenv').config()

export default {
    // Set Port Number
    port: normalizePort(process.env.PORT || 3000),
    // Set the NODE_ENV to 'development' by default
    nodeEnv: process.env.NODE_ENV || 'development',
    api: {
        prefix: '/api'
    }
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}