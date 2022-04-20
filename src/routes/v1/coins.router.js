const express = require('express');
const auth = require('../../middlewares/validate');
const coinsController = require('../../controllers/coins.controller');

const router = express.Router();

router.post(
  '/',
  (req, res, next) => auth(req, res, next),
  (req, res, next) => coinsController.getCoins(req, res, next)
);
router.post(
  '/coins',
  (req, res, next) => auth(req, res, next),
  (req, res, next) => coinsController.searchCoins(req, res, next)
);

module.exports = router;
