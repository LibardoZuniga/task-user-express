var hash = require("password-hash");
const { dbDataBase } = require('./../config/bd');
const db = dbDataBase();
const Users = db.models.Users;

let list = async() => {
    let resultUser = Users.findAll({})
        .then(users => {
            return users;
        })
        .catch(error => {
            console.log(error);
        });

    return Promise.resolve(resultUser);
}

let createUser = async({ tags }) => {
    //let resultUser = Users.create({ username: "user", password: "123", admin: true })
    let passHash = hash.generate(tags.password);
    tags.password = passHash;

    let resultUser = Users.create(tags)
        .then(result => {
            return result.toJSON();
        })
        .catch(error => {
            console.log(error);
        });
    return Promise.resolve(resultUser);
}

let deleteUser = async({ tags }) => {
    let resultUser = Users.destroy({ where: { id: tags.id } })
        .then(result => {
            return result;
        })
        .catch(error => {
            console.log(error);
        });
    return Promise.resolve(resultUser);
}

let updateUser = async({ tags, params }) => {

    if (tags.password) {
        let passHash = hash.generate(tags.password);
        tags.password = passHash;
    }

    let resultUser = Users.update(tags, { where: { id: params.id } })
        .then(result => {
            return result;
        })
        .catch(error => {
            console.log(error);
        });
    return Promise.resolve(resultUser);
}





module.exports = {
    list,
    deleteUser,
    updateUser,
    createUser
}