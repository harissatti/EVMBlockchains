# EVMBlockchains
erc20 smart contract are deployed on different evm Blockchain  to check how can we deployed erc20 on different blockchain
This repository contains the necessary files and documentation to create and verify ERC20 tokens on different blockchains. Each blockchain-specific folder consists of two subfolders and accompanying documentation explaining the specific blockchain's functionalities. The first subfolder contains the smart contract, while the second subfolder contains the front-end application that communicates with the smart contract through a backend API. The backend API, implemented using Axios, facilitates the transfer of ERC20 tokens on behalf of the user. This is achieved by the wallet administrator sending the specified amount of ERC20 tokens to the designated user address using the provided contract address.

File Structure:

[Blockchain Folder 1]

[Smart Contract Folder]
[Front-End Application Folder]
[Blockchain Documentation]
[Blockchain Folder 2]

[Smart Contract Folder]
[Front-End Application Folder]
[Blockchain Documentation]
Usage Instructions:

Navigate to the desired blockchain folder.
Access the [Smart Contract Folder] to find the ERC20 token contract for that blockchain.
Utilize the [Front-End Application Folder] to interact with the smart contract via the backend API.
Modify the provided Axios implementation to send the necessary data, including the user's address, contract address, and token amount.
Upon making the appropriate modifications, execute the API request to initiate the transfer of ERC20 tokens on behalf of the user.
Please refer to the specific [Blockchain Documentation] within each folder for additional information and guidelines on how to interact with the respective blockchain.

Note: The wallet administrator is responsible for facilitating the transfer of ERC20 tokens on behalf of the user. The user must provide their desired token amount, their address, and the contract address as input to the backend API.

Feel free to explore the different blockchain folders and customize the provided code to suit your specific needs.
