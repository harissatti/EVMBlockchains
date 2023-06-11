Usage
This section will provide you with examples of how to interact with your smart contracts and run the project.

Compiling Smart Contracts
Compile your smart contracts by running the following command:

npx hardhat compile 
Deploying & Verifying Smart Contracts on Etherscan
To verify your smart contracts on Etherscan, first list the available networks by running the following command:

npx hardhat verify --list-networks
Then, verify and deploy your smart contract on the Custom added network polygonZKEVMTestnet or polygonZKEVMMainnet.

Deployment
This section should provide instructions on how to deploy your smart contracts to different networks.

Deploying Smart Contracts
To deploy your smart contracts, run the following command

Deploy on testnet:

npx hardhat run scripts/deploy.js --network polygonZKEVMTestnet
Deploy on mainnet:

npx hardhat run scripts/deploy.js --network polygonZKEVMMainnet
Networks :

polygonZKEVMTestnet
polygonZKEVMMainnet