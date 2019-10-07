const router = require('express').Router();
const Trade = require('../models/trade');

router
  .get('/trades', (req, res, next) => {
    Trade.trades()
      .then(trades => res.json(trades))
      .catch(next);
  });

module.exports = router;