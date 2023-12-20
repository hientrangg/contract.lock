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
