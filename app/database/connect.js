import mongoose from 'mongoose'

const connectDB = async (databaseName) => {
   try {
      const { connection } = await mongoose.connect(`mongodb+srv://adampboucher:SOEN341@cluster0.v5jdyed.mongodb.net/$(databaseName)?retryWrites=true&w=majority`)

      if (connection.readystate === 1) {
         return Promise.resolve(true)
      }
   } catch (err) {
      return Promise.reject(err)
   }
}

export default connectDB
