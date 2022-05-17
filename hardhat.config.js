require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });



module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {},
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECTID}`,
      accounts: [process.env.RINKEBY_ACCOUNT_PRIVATE_KEY]
    },
    mainnet: {},
  },
  solidity: "0.8.4",
};
