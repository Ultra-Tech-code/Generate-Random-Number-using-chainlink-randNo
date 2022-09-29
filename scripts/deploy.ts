import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });

const Chainlink_Subscription_Id = process.env.Chainlink_Subscription_Id;

async function main() {

  const RandomNo = await ethers.getContractFactory("RandomNo");
  const randomNo = await RandomNo.deploy(Chainlink_Subscription_Id);

  await randomNo.deployed();

  console.log(`RandomNo deployed to ${randomNo.address}`);

  //go to chainlink and add the contract adddress to the list of consumers in your subscription
  //get contractAddress result and use it in interact.ts files
  //contractAddress = 0x0f6885A9367f4bd8b5A1d1B3f2E9Cf5B002eFb1c

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
