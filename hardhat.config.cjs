const { task } = require("hardhat/config");
require("@nomicfoundation/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
task("accounts","prinst the list of account", async(taskArgs,hre)=>{
  const accounts= await hre.ethers.getSigners();
  console.log(accounts)
  for(const account of accounts){
    const address= await account.getAddress();
    console.log(address)

  }
})
module.exports = {
  solidity: "0.8.28",
  defaultNetwork:"sepolia",
  networks:{
    hardhat:{},
    sepolia:{
      url:`https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};
