var express = require('express');
var router = express.Router();
var middlewarAuth = require('./../middlewares/middlewares');
var helper = require('./../helpers/helper');
const { list, deleteTask, updateTask, createTask } = require('./../controllers/task');

router.get('/', middlewarAuth.auth, async function(req, res, next) {
    const dataToken = req.dataToken;
    try {
        //verify is admin
        const taskData = await list({ dataToken });
        res.status(201).json({
            data: taskData
        });
    } catch (err) {
        next(err);
    }
});

router.post('/', middlewarAuth.auth, async function(req, res, next) {
    const tags = req.query;
    helper.verifyAdmin(req.dataToken.admin, res);
    try {
        //verify is admin
        const userData = await createTask({ tags });
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
    const dataToken = req.dataToken;
    try {
        const userData = await updateTask({ tags, params, dataToken });
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
        const userData = await deleteTask({ tags });
        res.status(201).json({
            data: userData
        });
    } catch (err) {
        next(err);
    }
});



module.exports = router;