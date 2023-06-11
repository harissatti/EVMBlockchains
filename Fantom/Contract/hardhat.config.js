require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const FAN_TESTNET_RPC_URL = process.env.FAN_TESTNET_RPC_URL;
const FAN_TESTNET_PRIVATE_KEY = process.env.FAN_TESTNET_PRIVATE_KEY;
const FAN_MAINNET_API = process.env.FAN_MAINNET_API;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    testnet:{
      url: FAN_TESTNET_RPC_URL,
      accounts:[FAN_TESTNET_PRIVATE_KEY],
      chainId:4002
    },
  },
  etherscan: {
    apiKey: FAN_MAINNET_API,
  },
};
//0xB242Ee7C38d2660B66e95d42A879C71Cb24219D2 aura
//https://testnet.ftmscan.com/address/0xB242Ee7C38d2660B66e95d42A879C71Cb24219D2#code