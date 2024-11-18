import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI: string | undefined = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
  models?: mongoose.Mongoose['models'];
}

// Adding the global namespace for TypeScript
declare global {
  var mongoose: MongooseCache;
}

let cached: MongooseCache = global.mongoose || (global.mongoose = { conn: null, promise: null });

async function dbConnect(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI ?? "", { bufferCommands: false }).then(mongoose => {
      console.log('Db connected');
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
  return cached.conn;
}

export default dbConnect;