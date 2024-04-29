# Ring DAO: LSAG signature evm-verifier

## Overview

This repository contains the Solidity implementation of RING DAO :
- The voting contract
- The LSAG signature verification algorithm. The LSAG algorithm is a cryptographic technique used for digital signatures, providing anonymity for the signer and enabling group signature generation without requiring interaction with others. This implementation is designed to be used in the context of the [V0rtex-01 hackathoin](https://dorahacks.io/hackathon/v0rtex-01).
- The Ring DAO NFT Membership contract

This version is derived from the open source version of [Cypher Lab](https://www.cypherlab.org/) available [here](https://github.com/Cypher-Laboratory/evm-verifier)

## Live contracts on Scroll Sepolia testnet
- Private voting contract: [0x1ffdbaf886cb4ddfa97852fc919b14653f981453](https://sepolia.scrollscan.com/address/0x1ffdbaf886cb4ddfa97852fc919b14653f981453)
- Membership NFT contract:[0x6e9a1082205896d75ebb3c72b1bbb593f31d781f](https://sepolia.scrollscan.com/token/0x6e9a1082205896d75ebb3c72b1bbb593f31d781f)
- LSAG verifier contract:[0x76a6409592983a2bd96a1fc928f40fcb0ff86f9f](https://sepolia.scrollscan.com/address/0x76a6409592983a2bd96a1fc928f40fcb0ff86f9f)

## The Contracts
### Private Voting contract
The private voting contract is a smart contract that allows users to vote on proposals while keeping their votes private. The contract uses the LSAG signature verification algorithm to ensure the anonymity of voters and protect against double voting. The contract also includes functionality for creating and managing proposals, as well as for tallying the votes and determining the outcome of the vote and executing the proposal if it passes.

### Membership NFT contract
The membership NFT contract is a smart contract that issues non-fungible tokens (NFTs) to users who are members of the Ring DAO. The NFTs serve as proof of membership and grant holders access to certain privileges and benefits within the DAO. The contract includes functionality for minting, as well as for verifying membership status and enforcing access control based on NFT ownership. The NFTs are not transferable and only one can be minted per address.

### LSAG verifier contract
The LSAG verifier contract is a smart contract that implements the LSAG signature verification algorithm. The contract provides a function that takes as input the necessary parameters for verifying an LSAG signature and returns a boolean value indicating whether the signature is valid. This contract can be used by other contracts that require LSAG signature verification, such as the private voting contract.

## What are LSAGs: Linkable Spontaneous Anonymous Group Signatures (over ECC)

LSAG, or Linkable Spontaneous Anonymous Group Signature over ECC, is a sophisticated cryptographic technique used for digital signatures. Its unique features include the ability to link multiple signatures to the same entity, ensuring anonymity for the signer, and enabling signature generation without requiring interaction with others. By leveraging Elliptic Curve Cryptography (ECC), LSAG provides a secure framework for group signatures, where multiple parties can jointly sign documents without revealing individual identities. This combination of properties makes LSAG a powerful tool for ensuring privacy and security in digital transactions and communications. Whether it's verifying the authenticity of documents or maintaining confidentiality in online interactions, LSAG offers a robust solution for safeguarding sensitive information in today's digital age.


## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [hardhat](https://hardhat.org/getting-started/)

### Installation

1. Clone the repository
```sh
git clone
```
2. Install NPM packages
```sh
npm install
```
3. Compile the contracts
```sh
npx hardhat compile
```

## Contribution

We welcome contributions from the community. If you wish to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear, descriptive messages.
4. Push your changes and create a pull request.

For any major changes, please open an issue first to discuss what you would like to change.


## Contact

If you have any questions, please contact us at `contact@cypherlab.fr`
