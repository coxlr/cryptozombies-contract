# Cryptozombies Contract Code

This project is the final contract code from the Solidity and Advanced Solidity path from https://cryptozombies.io/

I have also used hardhard to compile and deploy the contract.

Before testing or deploying the contract you need to add your node api provider and private key to the .env.example file and resave as .env
I personally use https://www.alchemy.com/ for the node url.

You then need to install all dependancies using
```
npm install
```

Once all dependencies have been installed you can test it is all set up correct by running.

```
npx hardhat run scripts/run.js 
```

Your terminal will then output results from the test run and if successfull it will information about your Zombie.

Deploy to a network run the following command, replacing <network> with your desired network from the hardhat.config file e.g. rinkeby.

```
npx hardhat run scripts/deploy.js --network <network>
```

Your contract will now be deployed and you will be given your contract address. You will need to take not of this as this will be used in the frontend code to connect to your contract.