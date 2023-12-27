async function verifyContract(): Promise<void> {
    console.log('1');
    const hre = require("hardhat");
    await hre.run("verify:sourcify", {
        address: '0xAa5c5D719E998a3015f5c77B96a3Fc0F861Fe0c4',
    })
    console.log('2');
}

verifyContract()
    .then(() => {console.log('done'); process.exit(0)})
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });