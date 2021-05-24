const router = require('express').Router();
const bandRoutes = require('./bandRoutes')
const locationRoutes = require('./locationRoutes')

router.get('/test', (req, res) => {
    res.json({"test": "testing"})
})

router.use('/bands', bandRoutes)
router.use('/locations', locationRoutes)
//add a path for each model

module.exports = router
