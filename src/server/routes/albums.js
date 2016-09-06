const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.render('albums/index', {title: 'Albums'});
});

module.exports = router;
