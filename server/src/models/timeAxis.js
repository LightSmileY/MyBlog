import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TimeAxisSchema = new Schema({
  title: {
    type: String,
    unique: true,
    require: true
  },
  info: {
    type: String,
    reqire: true
  },
  images: [],
  location: {
    type: String
  },
  create_time: {
    type: String,
    reqire: true
  },
  update_time: {
    type: String
  }
})

export default mongoose.model('timeAxis', TimeAxisSchema)