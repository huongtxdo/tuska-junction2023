import path from 'path'
import dotenv from 'dotenv'

import { ENV, Config } from '../types'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

// Loading process.env
const getConfig = (): ENV => {
  return {
    PORT: process.env.PORT ? Number(process.env.PORT) : 3001,
    MONGODB_URI: process.env.MONGODB_URI,
  }
}

// Throw an error if any field is undefined
const getSanitizedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`missing key ${key} in .env`)
    }
  }
  return config as Config
}

const config = getConfig()

const sanitizedConfig = getSanitizedConfig(config)

export default sanitizedConfig
