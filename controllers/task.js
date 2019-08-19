const { dbDataBase } = require('./../config/bd');
const db = dbDataBase();
const Tasks = db.models.Tasks;

let list = async({ dataToken }) => {
    let where = (!dataToken.admin) ? { where: { id: dataToken.idUser } } : {};
    let resulTask = Tasks.findAll(where)
        .then(result => {
            return result;
        })
        .catch(error => {
            console.log(error);
        });

    return Promise.resolve(resulTask);
}


let createTask = async({ tags }) => {

    let resultTask = Tasks.create(tags)
        .then(result => {
            return result.toJSON();
        })
        .catch(error => {
            console.log(error);
        });
    return Promise.resolve(resultTask);
}

let deleteTask = async({ tags }) => {
    let resultTask = Tasks.destroy({ where: { id: tags.id } })
        .then(result => {
            return result;
        })
        .catch(error => {
            console.log(error);
        });
    return Promise.resolve(resultTask);
}

let updateTask = async({ tags, params, dataToken }) => {

    let where = (!dataToken.admin) ? { where: { id: params.id, UserId: dataToken.idUser } } : { where: { id: params.id } };
    console.log(where);
    let resultTask = Tasks.update(tags, where)
        .then(result => {
            return result;
        })
        .catch(error => {
            console.log(error);
        });
    return Promise.resolve(resultTask);
}





module.exports = {
    list,
    deleteTask,
    updateTask,
    createTask
}