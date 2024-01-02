# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
## Start project
### Deploy:
```typescript 
npx hardhat run scripts/deploy.ts --network mirai
 ```
### Verify 
```typescript
npx hardhat verify --constructor-args argument.js --network mirai 0xE6C56bc616bD8f02E1216509b4803D64F7fABff4
```

### Verify tutorial
1. Create `verify.ts` file inside `scripts` folder with below code
```typescript
async function verifyContract(): Promise<void> {
    const contractAddress = '';  //your contract address
    const hre = require("hardhat");
    await hre.run("verify:sourcify", {
        address: contractAddress, 
    })
    console.log(`Verify successful, you can find your source at https://miraiscan.io/address/${contractAddress}#code`);
}

verifyContract()
    .then(() => {process.exit(0)})
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
```
2. Example of hardhat.config.ts
```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    // Solidity compile setting
  },
  etherscan: {
    apiKey: {
      mirai: "mirai",
    },
    customChains: [
      {
        network: "mirai",
        chainId: 2718,
        urls: {
          apiURL: "https://verify.miraiscan.io/v1/contract",
          browserURL: "https://miraiscan.io"
        }
      }
    ]
  },
  sourcify: {
    enabled: true,
    apiUrl: "https://verify.miraiscan.io/",
    browserUrl: "",
  },
  networks: {
    mirai: {
      url: "https://rpc1.miraichain.io",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

export default config;

```
3. Run following command
```
npx hardhat run scripts/verify.ts
```