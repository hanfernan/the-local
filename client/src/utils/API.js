import axios from 'axios'

//return axios.get so you return the promise allowing us to to do .then inside of our components
const API = {
    getBands: () => {
        return axios.get('/api/bands')
    },
    getLocations: () => {
        return axios.get('/api/locations')
    },
    getLocation: () => {
        return axios.get('/api/locations/:id')
    },
    createBand: function(data) {
        return axios.post('/api/banduser', data)
    },
    postLocation: () => {
        return axios.post('/api/locations')
    },
    removeLocation: () => {
        return axios.delete('/api/locations/:id')
    },
    updateLocation: () => {
        return axios.put('/api/locations/:id')
    },
    getEvents: () => {
        return axios.get('/api/events')
    },
    getSingleEvent: () => {
        return axios.get('/api/events/:id')
    },
    postEvent: () => {
        return axios.post('/api/events')
    },
    deleteEvent: () => {
        return axios.delete('/api/events/:id')
    },
    updateEvent: () => {
        return axios.put('/api/events/:id')
    },
    getBand: () => {
        return axios.get('/api/bands/:id')
    },
    deleteBand: () => {
        return axios.get('/api/bands/:id')
    },
    updateBand: () => {
        return axios.put('/api/bands/:id')
    },
    getGenres: () => {
        return axios.get('/api/genres')
    },
    getSingleGenre: () => {
        return axios.get('/api/genres/:id')
    },
    createGenre: () => {
        return axios.post('/api/genres')
    },
    updateGenre: () => {
        return axios.put('/api/genres/:id')
    },
    deleteGenre: () => {
        return axios.delete('/api/genres/:id')
    }
}

export default API