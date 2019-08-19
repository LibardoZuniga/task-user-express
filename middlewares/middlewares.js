const jwt = require('jsonwebtoken');

let auth = (req, res, next) => {
    let token = req.headers.token;
    jwt.verify(token, 'usexphash', (err, payload) => {
        if (err) {
            return res.status(401).json({
                error: true,
                data: err
            });
        } else {
            req.dataToken = payload;
            next();
        }
    });
}



module.exports = {
    auth

};