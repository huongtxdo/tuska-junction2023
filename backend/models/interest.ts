import { Schema, model } from 'mongoose'

import { IInterest } from '../types'

const interestSchema = new Schema({
  interestName: String,
  including: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})

interestSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Interest = model<IInterest>('Interest', interestSchema)

export default Interest
