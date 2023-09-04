const new_wallet = require('ethereumjs-wallet')
const { wallet } = require('./db')

const getWallet = async function (telegramID) {
    const current_wallet = await wallet.findById(telegramID)
    if (current_wallet) {
        console.log("Address: " + current_wallet.address)
        console.log("Private Key: " + current_wallet.privateKey)
        return current_wallet.address
    }
    //Create new wallet
    const EthWallet = new_wallet.default.generate(false)
    console.log("New Address: " + EthWallet.getAddressString())
    console.log("privateKey: " + EthWallet.getPrivateKeyString())

    await wallet.findByIdAndUpdate(telegramID, {
        address: EthWallet.getAddressString(),
        privateKey: EthWallet.getPrivateKeyString(),
    }, { upsert: true })

    return EthWallet.getAddressString()
}

const getPrivateKey= async function (telegramID){
    const current_wallet = await wallet.findById(telegramID)      
    if(current_wallet){
        return current_wallet.privateKey
    } 
}

module.exports ={
    getWallet,
    getPrivateKey
}



