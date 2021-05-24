const sequelize = require("../config/connection");
const { Band, Event, Genre, Location } = require("../models");

const bandData = require("./band-data.json");
const eventData = require("./event-data.json");
const genreData = require("./genre-data.json");
const locationData = require("./location-data.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const genres = await Genre.bulkCreate(genreData, {
    individualHooks: true,
    returning: true,
  });

  const locations = await Location.bulkCreate(locationData, {
    individualHooks: true,
    returning: true,
  });

  const bands = await Band.bulkCreate(bandData, {
    individualHooks: true,
    returning: true,
  });

  const events = await Event.bulkCreate(eventData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
