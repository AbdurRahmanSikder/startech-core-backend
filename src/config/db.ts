import mongoose from "mongoose";
import { getErrorMessage } from "../helpers/config.helper";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Startech core backend DB connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/Startech-core-backend`);
    }
    catch (error : unknown)
    {
        console.error(getErrorMessage(error));
    }
} 

export default connectDB;