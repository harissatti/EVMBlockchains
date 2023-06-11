require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const OPT_TESTNET_RPC_URL = process.env.OPT_TESTNET_RPC_URL;
const OPT_TESTNET_PRIVATE_KEY = process.env.OPT_TESTNET_PRIVATE_KEY;
const OPT_MAINNET_API = process.env.OPT_MAINNET_API;

module.exports = {
  solidity: "0.8.18",
  networks: {
    optimismTestnet: {
      url: OPT_TESTNET_RPC_URL,
      accounts: [OPT_TESTNET_PRIVATE_KEY],
      chainId: 420,
    },
  },
  etherscan: {
    apiKey: OPT_MAINNET_API,
  },
};
// 0x114e4b16452EB1Dc895Eb0b3f976C5ca657e21c4 aura
//https://goerli-optimism.etherscan.io/address/0x114e4b16452EB1Dc895Eb0b3f976C5ca657e21c4#code