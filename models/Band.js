const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Band extends Model {
  checkPassword(loginPW) {
    return bcrypt.compareSync(loginPW, this.password);
  }
}

Band.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    band_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
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
        model: "genre",
        key: "id",
        unique: false,
      },
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    youtube: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    soundcloud: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    featured_video: {
      type: DataTypes.STRING,
      allowNull: true
    },
    featured_instagram: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "location",
        key: "id",
        unique: false,
      },
    },
  },

  {
    hooks: {
      beforeCreate: async (newBandData) => {
        newBandData.password = await bcrypt.hash(newBandData.password, 10);
        return newBandData;
      },
      beforeUpdate: async (updatedBandData) => {
        updatedBandData.password = await bcrypt.hash(
          updatedBandData.password,
          10
        );
        return updatedBandData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "band",
  }
);

module.exports = Band;
