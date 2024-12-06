import mongoose from "mongoose";


const MONGO_URI= "mongodb+srv://subashneupane2022:America2022@cluster0.tsp4u.mongodb.net/";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI as string)
        console.log("MongoDB connection successful!");
    } catch (error) {
        console.error("MongoDB connection failed:");
        process.exit(1); // Exit the process if the connection fails
    }
};

export default connectDB;
