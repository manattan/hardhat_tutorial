import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract, ContractFactory } from "ethers";
import { ethers } from "hardhat";

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner]: SignerWithAddress[] = await ethers.getSigners();
    console.log("owner: ");
    console.log(owner);

    const Token: ContractFactory = await ethers.getContractFactory("Mogi");
    console.log("token: ");
    console.log(Token);

    const hardhatToken: Contract = await Token.deploy();
    console.log("hardhatToken: ");
    console.log(hardhatToken);

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    console.log("ownerBalance: ");
    console.log(ownerBalance);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
