import mongoose from "mongoose"

const connectDatabase = DATABASE_URL => {
  return mongoose.connect(DATABASE_URL)
}

export default connectDatabase;