var express = require('express');
var router = express.Router();
var middlewarAuth = require('./../middlewares/middlewares');
var helper = require('./../helpers/helper');
const { list, createUser, deleteUser, updateUser } = require('./../controllers/user');

router.get('/', middlewarAuth.auth, async function(req, res, next) {
    try {
        //verify is admin
        helper.verifyAdmin(req.dataToken.admin, res);
        const userData = await list();
        res.status(201).json({
            data: userData
        });
    } catch (err) {
        next(err);
    }
});


router.post('/', middlewarAuth.auth, async function(req, res, next) {
    const tags = req.query;
    try {
        //verify is admin
        helper.verifyAdmin(req.dataToken.admin, res);
        const userData = await createUser({ tags });
        res.status(201).json({
            data: userData
        });
    } catch (err) {
        next(err);
    }
});

router.put('/:id', middlewarAuth.auth, async function(req, res, next) {
    const tags = req.query;
    const params = req.params;

    try {
        //verify is admin
        helper.verifyAdmin(req.dataToken.admin, res);
        const userData = await updateUser({ tags, params });
        res.status(201).json({
            data: userData
        });
    } catch (err) {
        next(err);
    }
});


router.delete('/:id', middlewarAuth.auth, async function(req, res, next) {
    const tags = req.params;
    try {
        //verify is admin
        helper.verifyAdmin(req.dataToken.admin, res);
        const userData = await deleteUser({ tags });
        res.status(201).json({
            data: userData
        });
    } catch (err) {
        next(err);
    }
});







module.exports = router;