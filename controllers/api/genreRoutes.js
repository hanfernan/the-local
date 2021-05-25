const router = require('express').Router()
const db = require('../../models')
const { beforeDestroy } = require('../../models/Band')

router.get('/', (req, res) => {
    db.Genre.findAll().then(genre => {
        res.json(genre)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

router.get('/:id', (req, res) => {
    db.Genre.findByPk(req.params.id).then(genre => {
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