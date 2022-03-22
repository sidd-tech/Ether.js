const { ethers } = require("ethers");
const InfuraID=''//Hidden because of sensitive information
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${InfuraID}`)

const account ="0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8"

const main = async() =>{
    const balance= await provider.getBalance("0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8")
    console.log(`\n Balance of the account ${account} is: ${ethers.utils.formatEther(balance)} ETH`)
}



main()