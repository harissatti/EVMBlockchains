// require("@nomicfoundation/hardhat-toolbox");
require("hardhat-celo");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const celo_TESTNET_PRIVATE_KEY = process.env.celo_TESTNET_PRIVATE_KEY;
const celo_MAINNET_API=process.env.celo_MAINNET_API;
module.exports = {
  solidity: "0.8.18",
  networks: {
        alfajores: {
            // can be replaced with the RPC url of your choice.
            url: "https://alfajores-forno.celo-testnet.org",
            accounts: [
              celo_TESTNET_PRIVATE_KEY 
            ],
        },
        celo: {
            url: "https://forno.celo.org",
            accounts: [
              celo_TESTNET_PRIVATE_KEY 
            ],
        }
    },
    etherscan: {
        apiKey: {
            alfajores: celo_MAINNET_API,
            celo:celo_MAINNET_API
        },
    },
};
//0xB242Ee7C38d2660B66e95d42A879C71Cb24219D2
//Successfully verified contract AURA on Etherscan.
//https://alfajores.celoscan.io/address/0xB242Ee7C38d2660B66e95d42A879C71Cb24219D2#code