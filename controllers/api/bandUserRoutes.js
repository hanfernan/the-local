const router = require('express').Router()
const { response } = require('express')
const { Band, Event, Location, Genre } = require('../../models')

// signing up as a band
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const bandData = await Band.create(req.body);
    console.log(bandData);
    req.session.save(() => {
      req.session.band_id = bandData.id;
      req.session.logged_in = true;
      loggedIn = bandData.id;

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

      res.json({ band: bandData, message: "You are now logged in!", logged_in:true});
    });
  } catch (err) {
    res.status(400).json(err);
  }
})

router.get("/isloggedin", (req, res) => {
  console.log("logged in ", req.session.logged_in)
  if (req.session.logged_in) {
    res.json({
      logged_in: true,
      clare: "yes",
      request: req.session
    })
  } else {
    res.json({
      logged_in: false,
      peter: "no",
      request: req.session
    })
  }
})

router.post('/logout', (req, res) => {
  console.log(req.session.logged_in)
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.json("already logged out")
  }
})

router.get("/:id", (req, res) => {
  Band.findByPk(req.session.band_id,{
    include: [{ model: Location }, { model: Genre }, { model: Event}],
  })
  .then((band) => {
    res.json(band)
    console.log(band)
  })
  .catch((err) => {
    res.json(err)
  })

})
module.exports = router
