const router = require('express').Router()
const db = require('../../models')
const { beforeDestroy } = require('../../models/Band')
const { Band, Location } = require('../../models')

router.get('/', (req, res) => {
    db.Genre.findAll(
        {include: [{ model: Band },]}
    ).then(genre => {
        res.json(genre)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

router.get('/:id', (req, res) => {
    db.Genre.findByPk(req.params.id, {include: [{ model: Band }]}).then(genre => {
        res.json(genre)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

router.post('/', (req, res) => {
    db.Genre.create({
        ...req.body
    }).then(genre => {
        req.body(genre)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

module.exports = router