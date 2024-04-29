import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    // Add a local development network
    scroll_testnet: {
      url: "https://scroll-testnet.rpc.grove.city/v1/a7a7c8e2", // Your local Ethereum node URL
      accounts: ["c806e5e10ba22628e91e9730865be9bc92f8fd14ca5f455d1a0e4f6937efa4bc"]
    },
    // Add more networks here if needed
  },
};

export default config;
