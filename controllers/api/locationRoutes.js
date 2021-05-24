const router = require('express').Router()
const db = require('../../models')

router.get('/', (req, res) => {
    db.Location.findAll().then(location => {
        res.json(location)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
        })
});

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

module.exports = router