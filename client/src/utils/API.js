import axios from 'axios'

//return axios.get so you return the promise allowing us to to do .then inside of our components
const API = {
    getBands: () => {
        return axios.get('/api/bands')
    },
    getLocations: () => {
        return axios.get('/api/locations')
    },
    createBand: function() {
        return axios.post('/api/bands')
    },
    postLocation: () => {
        return axios.post('/api/locations')
    }
}

export default API