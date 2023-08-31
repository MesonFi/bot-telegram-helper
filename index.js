const TelegramBot = require('node-telegram-bot-api')
const fetch = require('cross-fetch')
require('dotenv').config({ path: '.env.local' })
const { mainMenu} = require('./keyboard')

const {
    BOT_TOKEN,
    ADMIN_CHAT_ID
} = process.env

const bot = new TelegramBot(BOT_TOKEN, {
    polling: true,
    filepath: false
})
console.log(BOT_TOKEN)

bot.getMe().then((me) => {
    console.log('ready!')
    console.log(`Bot username: ${me.username}`)
})

const menu_text = "Welcome to the official MesonFi Telegram! If you have any questions or inquiries, please select the appropriate option below.\n\nEnjoy fast, safe, and costless cross-chains with Meson:  https://meson.fi\n\nIf you need further assistance, please send admin a private message:\n\n👨‍💼 Moderator: @MrFish\n💰 >$20k swap appointment: @exterkti\n\nIf you require assistance with transactions on Meson, please follow these steps for support:\n\n1. Join the Meson Discord server using the following link: https://discord.gg/meson\n2. Click the 'Get Help' button below."

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id
    bot.sendMessage(chatId, menu_text,mainMenu)
})


bot.onText(/\/menu/, async (msg) => {
    const chatId = msg.chat.id
    const userId = msg.from.id
    console.log(userId)
    bot.sendMessage(chatId, menu_text, mainMenu)
})

bot.on('callback_query', async (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id
    const userId = callbackQuery.from.id
    const data = callbackQuery.data

    if (data === 'explorer') {
        bot.sendMessage(chatId, 'Please enter address:', {
            reply_markup: {
                force_reply: true,
            }
        })
    }
    else if (data === 'coop') {
        bot.sendMessage(chatId, "Please leave your project's official website, cooperation intention, and contact information:", {
            reply_markup: {
                force_reply: true,
            }
        })
    }

    console.log(`${userId}: ${data}`)
})

bot.on('message', async (msg) => {
    if (msg.reply_to_message && msg.reply_to_message.text === 'Please enter address:') {
        const chatId = msg.chat.id
        const address = msg.text
        const resp = await fetch(`https://explorer.meson.fi/api/v1/address/${address}/swap`)
        const data = await resp.json()
        if (data.result?.total) {
            bot.sendMessage(chatId, 'Click the button below to check transactions:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Check My Transactions', url: `https://explorer.meson.fi/address/${address}` }]
                    ]
                }
            })
        }
        else {
            bot.sendMessage(chatId, "⚠️No transactions on Meson", {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Go to Meson Explorer', url: `https://explorer.meson.fi/` }]
                    ]
                }
            })
        }
    }
})

bot.on('message', async (msg) => {
    if (msg.reply_to_message && msg.reply_to_message.text === "Please leave your project's official website, cooperation intention, and contact information:") {
        const chatId = msg.chat.id
        const input = msg.text
        bot.sendMessage(chatId, "Thank you. We will contact you as soon as possible.")
        bot.sendMessage(ADMIN_CHAT_ID, `@${msg.from.username}: ${input}`)
    }
})


