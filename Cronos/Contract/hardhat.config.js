
// import "@nomiclabs/hardhat";
// import "@nomiclabs/hardhat-etherscan";
// N
require("@cronos-labs/hardhat-cronoscan");
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const CRO_TESTNET_RPC_URL = process.env.CRO_TESTNET_RPC_URL;
const CRO_TESTNET_PRIVATE_KEY = process.env.CRO_TESTNET_PRIVATE_KEY;
const CRO_MAINNET_API = process.env.CRO_MAINNET_API;

module.exports = {
    solidity: "0.8.18",
     networks: {
       hardhat: {},
       cronosTestnet: {
         url: "https://evm-t3.cronos.org/",
         chainId: 338,
         accounts: [CRO_TESTNET_PRIVATE_KEY ],
         gasPrice: 5000000000000,
       },
       cronos: {
         url: "https://evm.cronos.org/",
         chainId: 25,
         accounts: [CRO_TESTNET_PRIVATE_KEY ],
         gasPrice: 5000000000000,
       },
     },
      etherscan: {
        apiKey: {
          cronosTestnet: CRO_MAINNET_API ,
          cronos: CRO_MAINNET_API , 
        },
      },
    
//   mocha: {
//     timeout: 10000000000,
//   },    
//   solidity: "0.8.18",
//   defaultNetwork: "cronos_testnet",
//   etherscan: {
//     apiKey: {
//      cronosTestnet: CRO_MAINNET_API ,
// },
//   customChains: [
//     {
//   network: "cronos_testnet" ,
//   chainId: 338,
//   urls: {
//     apiURL: CRO_TESTNET_RPC_URL,
//     browserURL:"https://explorer.cronos.org/testnet"
//   }
// }
//   ],
//   timeout: 60000    

// },
// networks: {
//   cronos_testnet: {
//       url: CRO_TESTNET_RPC_URL,
//       accounts: [CRO_TESTNET_PRIVATE_KEY],
//       chainId: 338,
//   },
// },

   
};

// contracts/aura.sol:AURA at 0x1dAA4AAD25d72a2206ccAc238E7b83B9De4F2A80
// Successfully verified contract AURA on Etherscan.
// https://testnet.cronoscan.com/address/0x1dAA4AAD25d72a2206ccAc238E7b83B9De4F2A80#code

// 0x698bF3CeD50FDf6eb2a93Df592755594A06Dc190 aura
// Successfully verified contract AURA on Etherscan.
// https://testnet.cronoscan.com/address/0x698bF3CeD50FDf6eb2a93Df592755594A06Dc190#code


//0x114e4b16452EB1Dc895Eb0b3f976C5ca657e21c4 aura
//https://testnet.cronoscan.com/address/0x114e4b16452EB1Dc895Eb0b3f976C5ca657e21c4#code