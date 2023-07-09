const { expect } = require("chai");
const { ethers } = require("hardhat");
const wallet = waffle.provider.createEmptyWallet();

//return the index of minted NFT
describe("MyNFT", function () {
  it("Should return the index of the minted NFT", async function () {
    //create an NFT object and deploy to my test blockchain
    const RobotsNFT = await ethers.getContractFactory("RobotsNFT");
    const robotNFT = await RobotsNFT.deploy();
    await robotNFT.deployed();
    console.log('Contract deployed to ', robotNFT.address);
    //get wallet with signer
    const [signer] = await ethers.getSigners();
    //location of metadata in IPFS (fake address for now)
    const nftdata = await robotNFT.mintNFT(signer.address,'ipfs://test-uri');
    //return metadata
    console.log(nftdata);
    //first contract should have value = 0
    expect(await nftdata.value).to.eq(0);

  });
});


