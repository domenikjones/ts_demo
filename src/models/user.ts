import * as mongoose from 'mongoose'

export const User = new mongoose.Schema({
  name: { type: String, default: 'foo-bar' }
})
