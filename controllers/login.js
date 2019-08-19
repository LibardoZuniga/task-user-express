const { dbDataBase } = require('./../config/bd');
var hash = require("password-hash");
const jwt = require('jsonwebtoken');
const db = dbDataBase();
const Users = db.models.Users;

let loginUser = async({ tags }) => {
    //check the username which is unique
    let resultUser = Users.findAll({
            limit: 1,
            where: { username: tags.username }
        })
        .then(users => {
            //verify if the password is correct
            let verify = hash.verify(tags.password, users[0].password)
            if (verify) {
                //token is assigned
                let resultUser = jwt.sign({ idUser: users[0].id, admin: users[0].admin }, 'usexphash', { expiresIn: '12h' });
                var response = {
                    token: resultUser,
                    error: false,
                    message: "Login successful"
                };

            } else {
                var response = {
                    error: true,
                    message: "username or password is incorrect "
                };
            }
            return response;
        })
        .catch(error => {
            console.log(error);
        });

    return Promise.resolve(resultUser);
}


module.exports = {
    loginUser
};