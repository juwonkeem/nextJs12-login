import mongoose, { Schema, Document, Model, model } from 'mongoose'

export const UsersSch = {
  users: users(),
}

interface IUsers extends Document {
  name?: string
  email: string
  password: string
  role?: Number
  createdAt?: Date
  updatedAt?: Date
}

function users() {
  const users = new mongoose.Schema<IUsers>({
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Number },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  })

  delete mongoose.models.users
  return model<IUsers>('users', users) || mongoose.models.users
}
