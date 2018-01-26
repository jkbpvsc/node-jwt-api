const jwt = require('jsonwebtoken');
const SECRET = 'example_secret';

module.exports.sign = function(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        })
    });
}

module.exports.verifyToken = function(req, res, next) {
    let authHeader = req.headers['authorization'];
    if (typeof authHeader !== 'undefined')
    {
        let bearer = authHeader.split(' ');
        jwt.verify(bearer[1], SECRET, (err, authData) => 
        {
            if (err) {
                res.sendStatus(403);
            }
            else {
                req.authData = authData;
                next();
            }
        })
    }
    else {
        res.sendStatus(403);
    }
}