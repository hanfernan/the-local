const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Band extends Model { }

Band.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        band_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
        bio: {
            type: DataTypes.STRING,
        },
        genre_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'genre',
                key: 'id',
                unique: false
              }
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id',
                unique: false
              }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'band'
    }
);

module.exports = Band;