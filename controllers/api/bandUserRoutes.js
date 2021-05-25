const router = require('express').Router()
const { response } = require('express')
const { Band } = require('../../models')

// signing up as a band
router.post("/", async (req, res) => {
  console.log(req.body)
    try {
      const bandData = await Band.create(req.body);
      console.log(bandData)
      req.session.save(() => {
        req.session.user_id = bandData.id;
        req.session.logged_in = true;
  
        res.status(200).json(bandData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });


// logging in as as band
module.exports = router
