const router = require("express").Router();
const { response } = require("express");
const { Band } = require("../../models");

// signing up as a band
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const bandData = await Band.create(req.body);
    console.log(bandData);
    req.session.save(() => {
      req.session.band_id = bandData.id;
      req.session.logged_in = true;
      loggedIn = bandData.data.id;

      res.status(200).json(bandData);
    });
  } catch (err) {
    console.log(ErrorEvent);
    res.status(400).json(err);
  }
});

// logging in as as band

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const bandData = await Band.findOne({ where: { email: req.body.email } });

    if (!bandData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await bandData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.band_id = bandData.id;
      req.session.logged_in = true;

      res.json({ band: bandData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
