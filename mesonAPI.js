const fetch = require('cross-fetch')
const { Wallet, keccak256 } = require('ethers')

async function getPrice(array) {
    const res = await fetch('https://relayer.meson.fi/api/v1/price', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from: `${array[0]}:${array[1]}`,
            to: `${array[2]}:${array[3]}`,
            amount: `${array[5]}`,
            fromAddress: ''
        })
    })
    const result = await res.json()
    console.log(result)
    return result
}

async function encodeSwap(array) {
    const res = await fetch('https://relayer.meson.fi/api/v1/swap', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from: `${array[0]}:${array[1]}`,
            to: `${array[2]}:${array[3]}`,
            amount: `${array[5]}`,
            fromAddress: `${array[4]}`,
            recipient: `${array[4]}`
        })
    })
    const result = await res.json()
    console.log(result)
    return result
}

function signDataV6(dataToSign, wallet) {
    if (
        keccak256(dataToSign[0].message) !== dataToSign[0].hash ||
        keccak256(dataToSign[1].message) !== dataToSign[1].hash
    ) {
        throw new Error('Invalid hash')
    }

    const sig0 = wallet.signingKey.sign(dataToSign[0].hash)
    const sig1 = wallet.signingKey.sign(dataToSign[1].hash)
    return [sig0.serialized, sig1.serialized]
}

async function submitSwap(array, encoded, signature) {
    const res = await fetch(`https://relayer.meson.fi/api/v1/swap/${encoded}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fromAddress: `${array[4]}`,
            recipient: `${array[4]}`,
            signatures: [
                `${signature[0]}`,
                `${signature[1]}`
            ]
        })
    })
    const result = await res.json()
    console.log(result)
    return result
}

async function initiateSwap(array, privateKey) {
    try {
        const wallet = new Wallet(privateKey)
        const encodeResp = await encodeSwap(array)
        if (encodeResp.error) {
            throw encodeResp.error.message
        }
        const signature = signDataV6(encodeResp.result.dataToSign, wallet)
        const submitResp = submitSwap(array, encodeResp.result.encoded, signature)
        return submitResp
    } catch (e) {
        throw new Error(e)
    }
}

async function checkStatus(swapId) {
    const res = await fetch(`https://relayer.meson.fi/api/v1/swap/${swapId}`)
    const result = await res.json()
    console.log(result)
    return result
}

module.exports = {
    getPrice,
    initiateSwap,
    checkStatus
}