var hash = require("password-hash");

let verifyAdmin = (admin, res) => {

    if (!admin) {
        res.status(401).json({
            data: {
                error: true,
                message: "Not  permissions"
            }
        });
    }

}


let createUserDefault = (model, data) => {

    let passHash = hash.generate(data.password);
    data.password = passHash;
    let resultUser = model.create(data)
        .then(result => {
            return result.toJSON();
        })
        .catch(error => {});

    return resultUser;
}

module.exports = {
    verifyAdmin,
    createUserDefault
};