const router = require('express').Router()
const db = require('../../models')

router.get('/', (req,res) => {
    db.Event.findAll(
        // {include: [{ model: Location}, { model: Band }]}
    ).then(event => {
        res.json(event)
    })
    .catch(err=> {
        res.json(err);
    })
});

router.get('/:id', (req,res) => {
    db.Event.findByPk(req.params.id, {include: [{model: Location}, { model: Band }]}
        ) 
        .then(event => {
            res.json(event)
        })
        .catch(err => {
            res.json(err)
        })
});

router.post('/', (req,res) => {
    db.Event.create({
        ...req.body
    }).then(event => {
        res.json(event)
    }).catch (err => {
        res.json(err);
    })
})

router.delete('/:id', (req,res) => {
    db.Event.destroy({where: {id: req.params.id}})
})

router.put('/:id', (req,res) => {
    db.Event.update(
        {...req.body},
        {where: {id:req.params.id}}
    ).then(event => {
        res.json(event)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = router