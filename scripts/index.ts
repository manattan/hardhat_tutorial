import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
const main = async () => {
  const developers: SignerWithAddress[] = await ethers.getSigners();

  developers.map((developer) => {
    console.log(developer.address);
  });
};

main();
