const mongoose = require('mongoose')

exports.WalletSchema = new mongoose.Schema({
  _id: String,
  address: String,
  privateKey: String,
})
