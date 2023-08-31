const mainMenu = {
    reply_markup: {
        inline_keyboard: [
            [{ text: '👨‍💼 Get Help', url: 'https://discord.com/channels/904570465266323456/949212159693434891' }],
            [
                { text: '🧾 Meson Explorer', callback_data: 'explorer' },
                { text: '💧Liquidity Provider', url: 'https://discord.com/channels/904570465266323456/949212159693434891' }
            ],
            [
                { text: '📋 Docs', url: 'https://docs.meson.fi' },
                { text: '🤝 Cooperation', callback_data: 'coop' }
            ],
        ]
    }
}


const from = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: '⬅️ Main Menu', callback_data: 'return' },
                { text: '❌ Close', callback_data: 'close' }
            ],
            [
                { text: 'Ethereum: USDC', callback_data: 'from-eth-usdc' },
                { text: 'Ethereum: USDT', callback_data: 'from-eth-usdt' },
                { text: 'Ethereum: BUSD', callback_data: 'from-eth-busd' }
            ],
            [
                { text: 'BNB Chain: USDC', callback_data: 'from-bnb-usdc' },
                { text: 'BNB Chain: USDT', callback_data: 'from-bnb-usdt' },
                { text: 'BNB Chain: BUSD', callback_data: 'from-bnb-busd' }
            ],
            [
                { text: 'Arbitrum: USDC', callback_data: 'from-arb-usdc' },
                { text: 'Arbitrum: USDT', callback_data: 'from-arb-usdt' }
            ]
        ]
    }
}

const to_eth = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: '⬅️ Main Menu', callback_data: 'return' },
                { text: '❌ Close', callback_data: 'close' }
            ],
            [
                { text: 'BNB Chain: USDC', callback_data: 'to-bnb-usdc' },
                { text: 'BNB Chain: USDT', callback_data: 'to-bnb-usdt' },
                { text: 'BNB Chain: BUSD', callback_data: 'to-bnb-busd' }
            ],
            [
                { text: 'Arbitrum: USDC', callback_data: 'to-arb-usdc' },
                { text: 'Arbitrum: USDT', callback_data: 'to-arb-usdt' }
            ]
        ]
    }
}

const to_bnb = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: '⬅️ Main Menu', callback_data: 'return' },
                { text: '❌ Close', callback_data: 'close' }
            ],
            [
                { text: 'Ethereum: USDC', callback_data: 'to-eth-usdc' },
                { text: 'Ethereum: USDT', callback_data: 'to-eth-usdt' },
                { text: 'Ethereum: BUSD', callback_data: 'to-eth-busd' }
            ],
            [
                { text: 'Arbitrum: USDC', callback_data: 'to-arb-usdc' },
                { text: 'Arbitrum: USDT', callback_data: 'to-arb-usdt' }
            ]
        ]
    }
}

const to_arb = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: '⬅️ Main Menu', callback_data: 'return' },
                { text: '❌ Close', callback_data: 'close' }
            ],
            [
                { text: 'Ethereum: USDC', callback_data: 'to-eth-usdc' },
                { text: 'Ethereum: USDT', callback_data: 'to-eth-usdt' },
                { text: 'Ethereum: BUSD', callback_data: 'to-eth-busd' }
            ],
            [
                { text: 'BNB Chain: USDC', callback_data: 'to-bnb-usdc' },
                { text: 'BNB Chain: USDT', callback_data: 'to-bnb-usdt' },
                { text: 'BNB Chain: BUSD', callback_data: 'to-bnb-busd' }
            ],
        ]
    }
}

const confirm = {
    reply_markup: {
        inline_keyboard: [
            [{ text: 'Continue Swap', callback_data: 'continue' }],
            [{ text: '❌ Cancel', callback_data: 'close' }]
        ]
    }
}

module.exports = {
    mainMenu,
}