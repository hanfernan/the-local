const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Location extends Model { }

Location.init(
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    {
        location_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

module.exports = Location