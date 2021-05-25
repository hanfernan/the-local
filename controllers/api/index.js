const router = require('express').Router();
const bandRoutes = require('./bandRoutes')
const locationRoutes = require('./locationRoutes')
const genreRoutes = require('./genreRoutes')
const eventRoutes = require('./eventRoutes')
const bandUserRoutes = require('./bandUserRoutes')

router.get('/test', (req, res) => {
    res.json({"test": "testing"})
})

router.use('/bands', bandRoutes)
router.use('/locations', locationRoutes)
router.use('/genres', genreRoutes)
router.use('/banduser', bandUserRoutes)

router.use('/events',eventRoutes)
//add a path for each model

module.exports = router
