const axios = require('axios');

const listAllCoins = async () => {
  const response = await axios('https://api.minerstat.com/v2/coins');
  return response;
};
/** list given coins, the parameter should be the coins separated by comma */
const listCoins = async (coins) => {
  const response = await axios(`https://api.minerstat.com/v2/coins?list=${coins}`);
  return response;
};

module.exports = { listAllCoins, listCoins };
