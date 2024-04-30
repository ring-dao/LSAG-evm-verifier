import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    // Add a local development network
    scroll_testnet: {
      url: "https://scroll-testnet.rpc.grove.city/v1/a7a7c8e2", // Your local Ethereum node URL
    },
    // Add more networks here if needed
  },
};

export default config;
