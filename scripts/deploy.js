const main = async () => {
    const contractFactory = await hre.ethers.getContractFactory('ZombieOwnership');
    const contract = await contractFactory.deploy();
    await contract.deployed();
    console.log("Contract deployed to:", contract.address);

    let zombie = await contract.createRandomZombie('Lee')
    await zombie.wait()

    console.log("Zombie Created #1")

    let zombieOwner = await contract.ownerOf(1)
    console.log("Zombie #1 is owned by: ", zombieOwner);
};
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();