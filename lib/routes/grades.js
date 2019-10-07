const router = require('express').Router();
const Grade = require('../models/grade');

router
  .get('/grades', (req, res, next) => {
    Grade.grades()
      .then(grades => res.json(grades))
      .catch(next);
  });


module.exports = router;