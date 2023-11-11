import { Request } from 'express'
import { Document, Types } from 'mongoose'

export interface ENV {
  PORT: number | undefined
  MONGODB_URI: string | undefined
}

export interface Config {
  PORT: number
  MONGODB_URI: string
}

export interface IUser extends Document {
  username: string
  passwordHash: string
  currentDosage: number
  isAdmin: Boolean
  interests: Types.ObjectId[]
}

export interface IInterest extends Document {
  interestName: string
  including: Types.ObjectId[]
}

export interface IRequestWithTokenAndUser extends Request {
  token: string
  user: IUser | null
}

export interface IDecodedToken {
  id: string
}
