const { ethers } = require("ethers");
const InfuraID=''//Hidden because of sensitive information
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${InfuraID}`)

const main= async () =>
{
    const latestBlock = await provider.getBlockNumber()
    console.log('Block Number :',latestBlock)
    const blockInfo = await provider.getBlock(latestBlock)
    console.log(blockInfo)

    const {transactions } = await provider.getBlockWithTransactions(latestBlock)
    // getting data of first five transaction on the block
    for(let i=0;i<5;i++){
        console.log(`Transaction No - ${i}:`)
        console.log(transactions[i])
    }
}
main()