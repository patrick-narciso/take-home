const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { coinsService } = require('../services');

const getCoins = catchAsync(async (req, res) => {
  const coins = await coinsService.listAllCoins(req.body);
  return res.status(httpStatus[200]).send(coins);
});

const searchCoins = catchAsync(async (req, res) => {
  const coinsToList = req.query.list;
  const response = await coinsService.listAllCoins(coinsToList);
  return res.status(httpStatus[200]).send(response);
});

module.exports = {
  getCoins,
  searchCoins,
};
