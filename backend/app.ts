import config from './utils/config'
import express from 'express'
require('express-async-errors')
const app = express()
import cors from 'cors'

import usersRouter from './controllers/users'
import loginRouter from './controllers/login'
import interestRouter from './controllers/interests'

import middleware from './utils/middleware'
import logger from './utils/logger'
import mongoose from 'mongoose'

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDb')
  })
  .catch((error) => logger.error('error connecting to MongoDB', error.message))

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.use(middleware.userExtractor) // => we can register a middleware for a specific set of routes as below
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/interests/', interestRouter)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
}

// app.use(middleware.errorHandler)

export default app
