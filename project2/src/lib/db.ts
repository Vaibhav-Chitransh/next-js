import { connect } from "mongoose";

const mongoURI = process.env.MONGO_URI;
if(!mongoURI) throw new Error("MONGODB URL is not found");

let cached = global.mongoose;
if(!cached) cached = global.mongoose = {conn: null, promise: null};

const connectDB = async () => {
    if(cached.conn) return cached.conn;

    if(!cached.promise) {
        cached.promise = connect(mongoURI).then((c) => c.connection);
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        throw error;
    }

    return cached.conn;
}

export default connectDB;