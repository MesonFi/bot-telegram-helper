const TelegramBot = require('node-telegram-bot-api')
const fetch = require('cross-fetch')
const express = require('express')
require('dotenv').config({ path: '.env.local' })
const { mainMenu } = require('./keyboard')

const {
    BOT_TOKEN,
    ADMIN_CHAT_ID,
    PORT = 3000
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

const app = express()
app.listen(PORT, async () => {

    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id
        const userName = msg.from.username
        const menu_text = `Welcome @${userName}! If you have any questions or inquiries, please select the appropriate option below.\n\nIf you need assistance with transactions on Meson, please following these steps for support:\n\n1. Join the Meson Discord server using the link: https://discord.gg/meson\n2. Click the 'Get Help' button below.
        \nIf you need further assistance, please send admin a private message: 
        \n👨‍💼 Moderator: @MrFish\n💰 >$20k swap appointment: @exterkti 
        `
        bot.sendMessage(chatId, menu_text, mainMenu)
    })


    bot.onText(/\/menu/, async (msg) => {
        const chatId = msg.chat.id
        const userName = msg.from.username
        const userId = msg.from.id
        console.log(userId)
        const menu_text = `Welcome @${userName}! If you have any questions or inquiries, please select the appropriate option below.\n\nIf you need assistance with transactions on Meson, please following these steps for support:\n\n1. Join the Meson Discord server using the link: https://discord.gg/meson\n2. Click the 'Get Help' button below.
        \nIf you need further assistance, please send admin a private message: 
        \n👨‍💼 Moderator: @MrFish\n💰 >$20k swap appointment: @exterkti 
        `
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
            let input = msg.text
            const regex = /(0x|T)[0-9a-zA-Z]{10,}/
            match = input.match(regex)
            if (!match) {
                bot.sendMessage(chatId, '⚠️Invalid address')
                return
            }
            if (match.length == 42)
                match = match.toLowerCase()
            const resp = await fetch(`https://explorer.meson.fi/api/v1/address/${match}/swap`)
            const data = await resp.json()
            if (data.result?.total) {
                bot.sendMessage(chatId, 'Click the button below to check transactions:', {
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Check My Transactions', url: `https://explorer.meson.fi/address/${match}` }]
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

})
