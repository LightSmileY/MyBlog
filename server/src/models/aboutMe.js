import mongoose from 'mongoose'
const Schema = mongoose.Schema

const AboutMeSchema = new Schema({
  nickName: String,
  sex: Boolean,
  age: Number,
  height: Number,
  weight: Number,
  charactors: String,
  hobbies: String,
  specialities: String,
  edu: String,
  major: String,
  ideality: String,
  dream: String,
  maxim: Array,
  tags: Array
})

export default mongoose.model('aboutMe', AboutMeSchema)