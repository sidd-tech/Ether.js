const { ethers } = require("ethers");
const InfuraID=''///Hidden because of sensitive information
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${InfuraID}`)

const account1= '0x111d799adc725bD74557e54859682ABeD9fE311A' // sender
const account2= '0x3524aE737D1cFFf22746d2295e8F604428be8319' // receiver

const privatekey1 = ''//Hidden because of sensitive information
const wallet = new ethers.Wallet(privatekey1,provider)


const main = async() =>{
    //show account 1 balance before transfer
    const senderBalanceBefore = await provider.getBalance(account1)
    console.log('sender balance before:', ethers.utils.formatEther(senderBalanceBefore))
    //show account 2 balance after transfer
    const receiverBalanceBefore = await provider.getBalance(account2)
    console.log('receiver balance before:', ethers.utils.formatEther(receiverBalanceBefore))
    //send ether on kovan test network
    const tx = await wallet.sendTransaction({to: account2,
        value:ethers.utils.parseEther("0.01")})

    //wait for transaction to be mined
    await tx.wait()
    console.log(tx)
    //show account 1 balance after transfer
    const senderBalanceAfter = await provider.getBalance(account1)
    console.log('sender balance after:', ethers.utils.formatEther(senderBalanceAfter))
    //show account 2 balance after transfer
    const receiverBalanceAfter = await provider.getBalance(account2)
    console.log('reciever balance after:', ethers.utils.formatEther(receiverBalanceAfter))
}

main()
