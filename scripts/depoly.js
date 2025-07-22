import hre from "hardhat"

async function main() {
    const CampaignFactory= await hre.ethers.getContractFactory("CampaignFactory")
    const d_CampaignFactory= await CampaignFactory.deploy();
    await d_CampaignFactory.waitForDeployment();
    console.log("The contract in deopoly address:", await d_CampaignFactory.getAddress())
    
}
main().then(()=> process.exit(0)).catch((error)=>{
console.log(error)
 process.exit(1)
})