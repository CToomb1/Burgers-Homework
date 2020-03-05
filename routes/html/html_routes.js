const router = require('express').Router();

const { getBurgers } = require('../../controllers/burger_controller');

router.get('/', (req, res) => {
  getBurgers()
    .then(burgerdata => {
      res.render('index', { burgers: burgerdata });
    })
    .catch(err => {
      res.status(500).end();
    });
});

module.exports = router;