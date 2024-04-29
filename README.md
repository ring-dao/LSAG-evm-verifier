# Ring DAO: LSAG signature evm-verifier

## Overview

This repository contains the Solidity implementation of the LSAG signature verification algorithm. The LSAG algorithm is a cryptographic technique used for digital signatures, providing anonymity for the signer and enabling group signature generation without requiring interaction with others. This implementation is designed to be used in the context of the [V0rtex-01 hackathoin](https://dorahacks.io/hackathon/v0rtex-01).

This version is derived from the open source version of [Cypher Lab](https://www.cypherlab.org/) available [here](https://github.com/Cypher-Laboratory/evm-verifier)


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
