const router = require('express').Router()
const db = require('../../models')

router.get('/', (req, res) => {
    db.Band.findAll().then(band => {
        res.json(band)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

router.post('/', (req, res) => {
    db.Band.create({
        ...req.body
    }).then(band => {
        req.body(band)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})


//need a route for specific bank by id

module.exports = router