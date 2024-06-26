import { ethers } from "hardhat";

async function main() {
  // cre  te a new signer
  const lock = await ethers.deployContract("RingDao", []);

  await lock.waitForDeployment();

  console.log(
    `deployed to ${lock.target}`,
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
