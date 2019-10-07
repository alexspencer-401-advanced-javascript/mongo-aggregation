const router = require('express').Router();
const Student = require('../models/student');

router
  .get('/studentscores', (req, res, next) => {
    Student.studentscores()
      .then(students => res.json(students))
      .catch(next);
  });


module.exports = router;