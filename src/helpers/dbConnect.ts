import mongoose from 'mongoose'

let cached: any = (global as any).mongoose
mongoose.Promise = global.Promise

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null }
}

export async function dbConnect() {
  if (!process.env.NEXT_PUBLIC_MONGODB_URI) {
    throw new Error('MONGODB_URI is the environment variable for the MongoDB connection string.')
  }

  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: process.env.NEXT_PUBLIC_MONGODB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}
