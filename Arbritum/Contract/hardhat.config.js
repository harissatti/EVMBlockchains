require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const ARB_TESTNET_RPC_URL = process.env.ARB_TESTNET_RPC_URL;
const ARB_TESTNET_PRIVATE_KEY = process.env.ARB_TESTNET_PRIVATE_KEY;
const ARB_MAINNET_API = process.env.ARB_MAINNET_API;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    arbitrum:{
      url: ARB_TESTNET_RPC_URL,
      accounts:[ARB_TESTNET_PRIVATE_KEY],
      chainId:421613
    },
  },
  etherscan: {
    apiKey: ARB_MAINNET_API,
  },
};
