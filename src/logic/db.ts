import mongoose, { Mongoose } from 'mongoose';

const MONGO_URL: string | undefined = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error('Please define the MONGO_URL environment variable inside .env.local');
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
    cached.promise = mongoose.connect(MONGO_URL ?? "", { bufferCommands: false }).then(mongoose => {
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