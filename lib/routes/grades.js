const router = require('express').Router();
const Grade = require('../models/grade');

router
  .get('/avgscores', (req, res, next) => {
    Grade.avgscores()
      .then(grades => res.json(grades))
      .catch(next);
  });

module.exports = router;