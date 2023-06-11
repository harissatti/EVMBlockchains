require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const ZKEVM_MAINNET_RPC_URL = process.env.ZKEVM_MAINNET_RPC_URL;
const  ZKEVM_TESTNET_RPC_URL = process.env.ZKP_TESTNET_RPC_URL;
const PRIVATE_KEY = process.env.ZKP_TESTNET_PRIVATE_KEY;
const  ETHERSCAN_ZKEVM_API_KEY = process.env.ZKP_MAINNET_API;

module.exports = {
  mocha: {
    timeout: 10000000000,
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: {
      polygonZKEVMMainnet: ETHERSCAN_ZKEVM_API_KEY,
      polygonZKEVMTestnet: ETHERSCAN_ZKEVM_API_KEY
    },
    customChains: [
      {
        network: "polygonZKEVMMainnet",
        chainId: 1101,
        urls: {
          apiURL: "https://explorer.mainnet.zkevm-test.net/api",
          browserURL: "https://explorer.mainnet.zkevm-test.net/"
        }
      },
      {
        network: "polygonZKEVMTestnet",
        chainId: 1442,
        urls: {
          apiURL: "https://explorer.public.zkevm-test.net/api",
          browserURL: "https://explorer.public.zkevm-test.net/"
        }
      }
    ],
    timeout: 60000  // increase timeout to 1 minute (default is 20000ms)
  },
  networks: {
    polygonZKEVMMainnet: {
      url: ZKEVM_MAINNET_RPC_URL, 
      accounts: [PRIVATE_KEY],
      chainId: 1101,
    },
    polygonZKEVMTestnet: {
      url: ZKEVM_TESTNET_RPC_URL, 
      accounts: [PRIVATE_KEY],
      chainId: 1442,
    }
  },

};
  // 0x42B52515A72a3a24284c0e93881f7d68C7F8D3F2 aura
// Successfully verified contract AURA on Etherscan.
// https://explorer.public.zkevm-test.net/address/0x42B52515A72a3a24284c0e93881f7d68C7F8D3F2#code