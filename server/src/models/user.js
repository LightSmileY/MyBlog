import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    reqire: true
  },
  email: {
    type: String,
    reqire: true
  },
  nickname: {
    type: String
  },
  create_time: {
    type: String
  },
  last_login_time: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model('user', UserSchema)