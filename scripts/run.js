const main = async () => {
    const contractFactory = await hre.ethers.getContractFactory('ZombieOwnership');
    const contract = await contractFactory.deploy();
    await contract.deployed();
    console.log("Contract deployed to:", contract.address);

    let zombie = await contract.createRandomZombie('Lee')
    await zombie.wait()
    console.log("Zombie #1 Created at block: ", zombie.hash)
    console.log("Zombie #1 id: ", zombie.value);

    let zombieOwner = await contract.ownerOf(zombie.value)
    console.log("Zombie #1 is owned by:", zombieOwner);

    let zombies = await contract.getZombiesByOwner(zombieOwner)
    console.log(zombieOwner, "Owns:", zombies.length, "Zombies");

    let zombieDetails = await contract.zombies(zombies[0])
    console.log("Zombie #1 dna:", zombieDetails.toString());
    console.log("Zombie #1 level:", zombieDetails.level);

    let levelUp = await contract.levelUp(zombies[0], { gasLimit: "285000", value: 1000000000000000 })
    zombieDetails = await contract.zombies(zombies[0])
    console.log("Zombie #1 new level:", zombieDetails.level);

    console.log("Zombie #1 name:", zombieDetails.name);
    let changeName = await contract.changeName(zombies[0], 'Frank', { gasLimit: "285000" })
    zombieDetails = await contract.zombies(zombies[0])
    console.log("Zombie #1 new name:", zombieDetails.name);

    console.log("Zombie #1 wins:", zombieDetails.winCount);
    console.log("Zombie #1 losses:", zombieDetails.lossCount);
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