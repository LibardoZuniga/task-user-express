module.exports = (sequelize, DataType) => {

    const Tasks = sequelize.define('Tasks', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        state: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    Tasks.associate = (models) => {
        Tasks.belongsTo(models.Users);
    };

    return Tasks;
};