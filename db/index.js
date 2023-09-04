const mongoose = require('mongoose')
const { WalletSchema } = require('./schema')

mongoose.pluralize(null)
const db = mongoose.createConnection(process.env.MONGO_URL)
db.on('connection', () => console.log('[mongodb] DB Connected!'))
db.on('error', err => console.warn('[mongodb] DB', err.message))

const wallet = db.model('wallet', WalletSchema)

module.exports = {
  wallet,
}
