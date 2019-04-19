const express = require('express');
const router = express.Router();
const Gun = require('./gun');

const gun = new Gun();

router
  // load a slot with a bullet
  .post('/load', (req, res, next) => {
    const answer = gun.load() ? 'Well locked and loaded' : 'Already full';
    res.status(200).send(answer);
  })
  // rolls the barrel
  // .post('/roll', (req, res, next) => {
  //   res.status(200).send("click")
  // })
  // shoot
  .post('/shoot', (req, res, next) => {
    let answer = '';
    if (gun.count() === 0) answer += ':warning: _the gun is empty_\n';
    answer += ':gun: ';
    answer += gun.shoot() ? 'BANG' : 'click';
    res.status(200).send(answer);
  });

module.exports = router;
