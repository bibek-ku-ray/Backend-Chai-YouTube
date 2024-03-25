import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("\n DB CONNECTED !!!",connectionInstance.connection.host)
        
    } catch (error) {
        console.log("MONGODB CONNECTION FAIL: ", error);
        process.exit(1)
    }
}

export default connectDB;