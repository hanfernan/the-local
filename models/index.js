const Band = require('./Band')
const Event = require('./Event')
const Genre = require('./Genre')
const Location = require('./Location')

Band.hasMany(Event, {
    foreignKey: "band_id",
    onDelete: "CASCADE",
});

Band.belongsTo(Genre, {
    foreignKey: "genre_id",
});


Band.belongsTo(Location, {
    foreignKey: "location_id",
    onDelete: "CASCADE"
});
Location.hasMany(Event, {
    foreignKey:"location_id",

});

Location.hasMany(Band, {
    foreignKey: "location_id",
    onDelete:"CASCADE",
})

Event.belongsTo(Band, {
    foreignKey: "band_id",
    onDelete: "CASCADE",
});

Event.belongsTo(Location, {
    foreignKey: "location_id",
    onDelete: "CASCADE"
});

module.exports = { Band, Event, Location, Genre};




