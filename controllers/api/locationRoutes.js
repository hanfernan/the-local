const router = require('express').Router()
const db = require('../../models')
const { Band } = require('../../models')

router.get('/', (req, res) => {
    db.Location.findAll({include: [{model: Band }]}).then(location => {
        res.json(location)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
        })
});

router.get('/:id', (req, res) => {
    db.Location.findByPk(req.params.id, {include: [{model: Band}]}).then(location => {
        res.json(location)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

router.post('/', (req,res) => {
    db.Location.create({
        ...req.body
    }).then(location => {
        res.json(location)
    })
    .catch(err => {
        res.json(err);
    })
})

router.delete('/:id', (req, res) => {
    db.Location.destroy({where: {id: req.params.id}})
})

module.exports = router