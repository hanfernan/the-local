const router = require('express').Router();
const path = require('path')

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//wild card route that serves the front end
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
  

module.exports = router;