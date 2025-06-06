import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGOURL);
        console.log("Database Connected : ", connect.connection.host);
    } catch (error) {
        console.log("Error: ", error.message);
    }
}