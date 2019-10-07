const router = require('express').Router();
const Book = require('../models/book');

router
  .get('/pagecount', (req, res, next) => {
    Book.pagecount()
      .then(books => res.json(books))
      .catch(next);
  });

module.exports = router;