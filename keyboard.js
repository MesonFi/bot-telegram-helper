const mainMenu = {
    reply_markup: {
        inline_keyboard: [
            [{ text: '👨‍💼 Get Help', url: 'https://discord.com/channels/904570465266323456/949212159693434891' }],
            [
                { text: '🔁Swap', callback_data: 'swap' },
                { text: '🔑Show Private Key', callback_data: 'privateKey' }
            ],
            [
                { text: '🧾 Meson Explorer', callback_data: 'explorer' },
                { text: '💧Liquidity Provider', url: 'https://discord.com/channels/904570465266323456/949212159693434891' }
            ],
            [
                { text: '📋 Docs', url: 'https://docs.meson.fi' },
                { text: '🤝 Cooperation', callback_data: 'coop' }
            ]          
        ]
    }
}


const from = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: '✖️ Close', callback_data: 'close' }
            ],
            [{text:'---------------- Ethereum ----------------',callback_data:'-'}],
            [
                { text: 'USDC', callback_data: 'from-eth-usdc' },
                { text: 'USDT', callback_data: 'from-eth-usdt' },
                { text: 'BUSD', callback_data: 'from-eth-busd' }
            ],
            [{text:'---------------- BNB Chain ----------------',callback_data:'-'}],
            [
                { text: 'USDC', callback_data: 'from-bnb-usdc' },
                { text: 'USDT', callback_data: 'from-bnb-usdt' },
                { text: 'BUSD', callback_data: 'from-bnb-busd' }
            ],
            [{text:'---------------- Arbitrum ----------------',callback_data:'-'}],
            [
                { text: 'USDC', callback_data: 'from-arb-usdc' },
                { text: 'USDT', callback_data: 'from-arb-usdt' }
            ]
        ]
    }
}

const to_eth = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: '✖️ Close', callback_data: 'close' }
            ],
            [{text:'---------------- BNB Chain ----------------',callback_data:'-'}],
            [
                { text: 'USDC', callback_data: 'to-bnb-usdc' },
                { text: 'USDT', callback_data: 'to-bnb-usdt' },
                { text: 'BUSD', callback_data: 'to-bnb-busd' }
            ],
            [{text:'---------------- Arbitrum ----------------',callback_data:'-'}],
            [
                { text: 'USDC', callback_data: 'to-arb-usdc' },
                { text: 'USDT', callback_data: 'to-arb-usdt' }
            ]
        ]
    }
}

const to_bnb = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: '✖️ Close', callback_data: 'close' }
            ],
            [{text:'---------------- Ethereum ----------------',callback_data:'-'}],
            [
                { text: 'USDC', callback_data: 'to-eth-usdc' },
                { text: 'USDT', callback_data: 'to-eth-usdt' },
                { text: 'BUSD', callback_data: 'to-eth-busd' }
            ],
            [{text:'---------------- Arbitrum ----------------',callback_data:'-'}],
            [
                { text: 'USDC', callback_data: 'to-arb-usdc' },
                { text: 'USDT', callback_data: 'to-arb-usdt' }
            ]
        ]
    }
}

const to_arb = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: '✖️ Close', callback_data: 'close' }
            ],
            [{text:'---------------- Ethereum ----------------',callback_data:'-'}],
            [
                { text: 'USDC', callback_data: 'to-eth-usdc' },
                { text: 'USDT', callback_data: 'to-eth-usdt' },
                { text: 'BUSD', callback_data: 'to-eth-busd' }
            ],
            [{text:'---------------- BNB Chain ----------------',callback_data:'-'}],
            [
                { text: 'USDC', callback_data: 'to-bnb-usdc' },
                { text: 'USDT', callback_data: 'to-bnb-usdt' },
                { text: 'BUSD', callback_data: 'to-bnb-busd' }
            ],
        ]
    }
}

const confirm = {
    reply_markup: {
        inline_keyboard: [
            [{ text: 'Confirm', callback_data: 'continue' }],
            [{ text: '✖️ Close', callback_data: 'close' }]
        ]
    }
}


module.exports = {
    mainMenu,
    from,
    to_arb,
    to_bnb,
    to_eth,
    confirm
}