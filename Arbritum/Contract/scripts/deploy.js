// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const Aura = await hre.ethers.getContractFactory("AURA");
  const aura= await Aura.deploy();

  await aura.deployed();

  console.log(
    aura.address,"aura"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//contract 0xB242Ee7C38d2660B66e95d42A879C71Cb24219D2 aura
//contracts/aura.sol:AURA at 0xB242Ee7C38d2660B66e95d42A879C71Cb24219D2