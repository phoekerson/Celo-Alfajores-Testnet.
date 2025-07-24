import { ethers } from "hardhat";

async function main() {
  console.log("Deploying Storage contract to Celo Alfajores...");

  const Storage = await ethers.getContractFactory("Storage");
  const storage = await Storage.deploy();

  await storage.waitForDeployment();

  const address = await storage.getAddress();
  console.log(`Storage contract deployed to: ${address}`);

  // Wait for a few block confirmations
  console.log("Waiting for block confirmations...");
  await storage.deploymentTransaction()?.wait(5);

  console.log("Deployment completed!");
  return address;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });