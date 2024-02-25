import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Initialize chached variable, here we attempt to retrieve a mongoose property from the global object.
// In NodeJs the global object provides a space to store global variables
// The cached variable is intended to hold a cached connections to our database.
let cached = (global as any).mongoose || { conn: null, promise: null };


export const connectToDatabase = async () => {
    
    // checking is cache is already connected
    if (cached.conn) return cached.conn;

    // If the URI is not available throw an error
    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');
    
    // Here we connect to an existing cache connection or create a new one.
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'evently',
        bufferCommands: false,
    })
    cached.conn = await cached.promise;
    console.log("Connected to MongoDB!");
    return cached.conn;
}






  





