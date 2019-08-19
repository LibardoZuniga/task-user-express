var express = require('express');
var router = express.Router();
const { loginUser } = require('./../controllers/login');


router.post('/', async function(req, res, next) {
    const tags = req.query;
    try {
        const login = await loginUser({ tags });
        let code = (login.error === false) ? 202 : 401;
        res.status(code).json({ login });
    } catch (err) {
        next(err);
    }

});



module.exports = router;