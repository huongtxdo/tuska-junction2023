import { IUser } from './types'

declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string
    PORT: number
    MONGO_URI: string
    TEST_MONGODB_URI: string
  }
}

declare namespace Express {
  export interface Request {
    id?: string
    token: string
    user: IUser
  }
}

