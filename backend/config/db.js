import 'dotenv/config'
import mongoose from 'mongoose'

export const connectDb = async () => {
    try {
        let connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected");
    } catch (err) {
        console.log("failed to connect data base")
        console.log(err);
    }
}



