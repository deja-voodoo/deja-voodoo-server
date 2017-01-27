var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/noun', (req, res, next) => {
    return knex('noun')
    .then(nouns =>{
      res.json(nouns)
    })
})
router.get('/verb', (req, res, next) => {
    return knex('verb')
    .then(verbs =>{
      res.json(verbs)
    })
})
router.get('/adj', (req, res, next) => {
    return knex('adj')
    .then(adjs =>{
      res.json(adjs)
    })
})
router.get('/meme', (req, res, next) => {
    return knex('meme')
    .then(memes =>{
      res.json(memes)
    })
})

module.exports = router;
