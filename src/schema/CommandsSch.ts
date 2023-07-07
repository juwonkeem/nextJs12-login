import mongoose, { Schema, Document, Model, model } from 'mongoose'

export const CommandsSch = {
  commands: commands(),
}

interface ICommand extends Document {
  page: string
  type: string
  cmdCd?: string
  cmdType?: string
  seq?: number
  regx: string
  cmd: string
  fullCmd: string
  isUse: boolean
}

function commands() {
  const commands = new mongoose.Schema<ICommand>({
    _id: { type: Schema.Types.ObjectId, required: true },
    page: { type: String, required: true },
    type: { type: String, required: true },
    cmdCd: { type: String },
    cmdType: { type: String },
    seq: { type: Number },
    regx: { type: String, required: true },
    cmd: { type: String, required: true },
    fullCmd: { type: String, required: true },
    isUse: { type: Boolean, default: false },
  })

  delete mongoose.models.commands
  return model<ICommand>('commands', commands) || mongoose.models.commands
}

// interface ICommands extends Document {
//   page: string
//   type: string
//   cmdCd?: string
//   cmdType?: string
//   seq?: number
//   regx: string
//   cmd: string
//   fullCmd: string
//   isUse: boolean
// }

// const commandsSchema = new mongoose.Schema<ICommands>({
//   _id: { type: Schema.Types.ObjectId, required: true },
//   page: { type: String, required: true },
//   type: { type: String, required: true },
//   cmdCd: { type: String },
//   cmdType: { type: String },
//   seq: { type: Number },
//   regx: { type: String, required: true },
//   cmd: { type: String, required: true },
//   fullCmd: { type: String, required: true },
//   isUse: { type: Boolean, default: false },
// })

// const Commands: Model<ICommands> =
//   mongoose.models.commands || model<ICommands>('commands', commandsSchema);

// export default Commands;
