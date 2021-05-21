const router = require('express').Router();

router.get('/test', (req, res) => {
    res.json("testing")
})

//add a path for each model

module.exports = router
