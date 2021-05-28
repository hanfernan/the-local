import axios from "axios";

//return axios.get so you return the promise allowing us to to do .then inside of our components
const API = {
  getBands: () => {
    return axios.get("/api/bands");
  },
  getLocations: () => {
    return axios.get("/api/locations");
  },
  getLocation: (id) => {
    return axios.get("/api/locations/" + id);
  },
  createBand: function (data) {
    return axios.post("/api/banduser", data);
  },
  login: function (data) {
    return axios.post("/api/banduser/login", data);
  },
  postLocation: () => {
    return axios.post("/api/locations");
  },
  removeLocation: (id) => {
    return axios.delete("/api/locations/" + id);
  },
  updateLocation: (id) => {
    return axios.put("/api/locations/" + id);
  },
  getEvents: () => {
    return axios.get("/api/events");
  },
  getSingleEvent: () => {
    return axios.get("/api/events/:id");
  },
  postEvent: () => {
    return axios.post("/api/events");
  },
  deleteEvent: (id) => {
    return axios.delete("/api/events/" + id);
  },
  updateEvent: (id) => {
    return axios.put("/api/events/" + id);
  },
  getBand: (id) => {
    return axios.get("/api/bands/" + id);
  },
  deleteBand: (id) => {
    return axios.get("/api/bands/" + id);
  },
  updateBand: (id, ...bandUpdateData) => {
    return axios.put("/api/bands/" + id, ...bandUpdateData);
  },
  getGenres: () => {
    return axios.get("/api/genres");
  },
  getSingleGenre: (id) => {
    return axios.get("/api/genres/" + id);
  },
  createGenre: () => {
    return axios.post("/api/genres");
  },
  updateGenre: (id, genreUpdate) => {
    return axios.put("/api/genres/" + id, genreUpdate);
  },
  deleteGenre: (id) => {
    return axios.delete("/api/genres/" + id);
  },
  getUserBand: (id) => {
    return axios.get("/api/banduser/" + id);
  },
};

export default API;
