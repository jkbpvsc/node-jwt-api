const router = require('express').Router();

router.get('/protected', function(req, res) 
{
    res.send({data: req.authData});
})

module.exports = router;