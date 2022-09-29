import { ethers } from "hardhat";

async function main() {

    const RandomNoAddress = "0x0f6885A9367f4bd8b5A1d1B3f2E9Cf5B002eFb1c";
    const RandomNo = await ethers.getContractFactory("RandomNo");

  //interact with the contract
  const interact = RandomNo.attach(RandomNoAddress);

  //get the request id (request randomwords returns array[bool and requestid])
  //const requestId = await interact.requestRandomWords();
  //this line of code is not needed since last requestId give us the result without looping through the array
//   const res = await requestId.wait();
//   console.log("my requestid: ", res.logs[1].topics);
  
   //get the last request id (get the last  requestid)
   const lastrequestId = await interact.lastRequestId();
   console.log("my lastrequestid: ", lastrequestId);

  

  //returns the chainlink random word
  const randomwords = await interact.getRequestStatus(lastrequestId);
  console.log("my randomwords: ", randomwords);

  //returns the random words
  const result = await interact.resolve(randomwords);
  console.log("my result: ", result);

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
