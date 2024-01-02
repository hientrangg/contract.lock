async function verifyContract(): Promise<void> {
    const contractAddress = '0xAa5c5D719E998a3015f5c77B96a3Fc0F861Fe0c4';  //your contract address
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