const router = require('express').Router();
const knex = require('../db/knex');
const controller = require('../controllers/index.js');

function Albums() { return knex('albums'); }

router.get('/', (req, res, next) => {
  Albums().then(value => {
    res.render('albums/index',
    {
      title: 'Albums',
      record: value
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('albums/new',
  {
    title: 'New Album',
    genres: controller.genres
  });
});

router.post('/', (req, res, next) => {
  Albums().insert({
    name: req.body.name,
    artist: req.body.artist,
    genre: req.body.genre,
    stars: parseInt(req.body.stars),
    explicit: Boolean(req.body.explicit)
   })
  .then(() => {
    res.redirect('/albums');
  });
});

module.exports = router;
