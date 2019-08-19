var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
const config = require('../config/config.json');
const env = config.dev;
let db = null;

let dbDataBase = () => {
    if (!db) {
        const sequelize = new Sequelize(
            env.db.database,
            env.db.username,
            env.db.password,
            env.db.params
        );
        db = {
            sequelize,
            Sequelize,
            models: {}
        };

        const dir = path.join(__dirname, '/../models');
        fs.readdirSync(dir).forEach(filename => {
            const modelDir = path.join(dir, filename);
            const model = sequelize.import(modelDir);
            db.models[model.name] = model;
        });

        Object.keys(db.models).forEach(key => {
            db.models[key].associate(db.models);
        });
    }


    return db;
};

module.exports = {
    dbDataBase
}