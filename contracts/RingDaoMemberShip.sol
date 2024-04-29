// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// simple nft to represent the
contract RingDaoMemberShip is ERC721 {
    uint256 nextid = 1;

    constructor() ERC721("RingDaoMemberShip", "RDM") {}

    // lock transferFrom function
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public pure override {
        revert("transfer is locked");
    }

    // lock safeTransferFrom function
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public pure override {
        revert("transfer is locked");
    }

    function mint() public {
        // only one token per address
        require(balanceOf(msg.sender) == 0, "only one token per address");

        _mint(msg.sender, nextid);
        nextid++;
    }

    function burn(uint256 tokenId) public {
        require(msg.sender == ownerOf(tokenId), "only owner can burn");
        _burn(tokenId);
    }
}
