const router = require('express').Router();
const authentication = require('./auth');

router.use('/api', authentication.verifyToken, require('./api.js'));

router.post('/login', function(req, res) {
    let theOnlyUser = {
        id: 'password',
        password: 'password'
    }

    authentication.sign({user: theOnlyUser}).then(token => res.send({token})).catch(() => res.sendStatus(500));
});

module.exports = router;