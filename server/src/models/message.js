import mongoose from 'mongoose'
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  mid: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true
  },
  nickname: {
    type: String,
    reqire: true
  },
  message: {
    type: String,
    reqire: true
  },
  time: {
    type: String,
    reqire: true
  }
})

export default mongoose.model('message', MessageSchema)