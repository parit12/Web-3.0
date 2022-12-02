//https://eth-goerli.g.alchemy.com/v2/kguedh5yDiFzyQLmgaZE18pYrQ4C-CnO
require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    Goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/kguedh5yDiFzyQLmgaZE18pYrQ4C-CnO',
      accounts: ['c71fd890de26bb3f2bd42a51ef4490a2432b4aaa523153feedbea238f1a903d4']
    }
  }
}