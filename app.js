const express = require('express');
const config = require('./config/config.json');
const app = express();
//se define entorno desarrollo
const env = config.dev;
const { dbDataBase } = require('./config/bd');
var helper = require('./helpers/helper');
const db = dbDataBase();
var loginRouter = require('./routes/login');
var userRouter = require('./routes/user');
var taskRouter = require('./routes/task');
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/task', taskRouter);



db.sequelize.sync().done(() => {
    app.listen(env.app.port, () => {
        const Users = db.models.Users;
        //create user default (admin)
        let userAdminDefault = helper.createUserDefault(Users, { username: "root", password: "123", admin: true });
        //create user default 
        let userDefault = helper.createUserDefault(Users, { username: "user", password: "123", admin: false });

    });
});