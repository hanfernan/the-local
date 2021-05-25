const router = require('express').Router()
const db = require('../../models')
const { Genre, Location } = require('../../models')

// getting all bands
router.get('/', (req, res) => {
    db.Band.findAll(
        {include: [{ model: Location}, { model: Genre }]}
    ).then(band => {
        res.json(band)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// getting a band with a certain id
router.get('/:id', (req, res) => {
    db.Band.findByPk(req.params.id, {include: [{ model: Location}, { model: Genre}]}).then(band => {
        res.json(band)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// creating a band
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

// updating a band with a certain id
router.put('/:id', (req, res) => {
    db.Band.update(
        {...req.body},
        {where: {id: req.params.id}}
    ).then(band => {
        res.json(band)
    }).catch(err => {
        res.json(err)
    })
})

// deleting a band with a certain id
router.delete('/:id', (req, res) => {
    db.Band.destroy({where: {id: req.params.id}})
})

module.exports = router