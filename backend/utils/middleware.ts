import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import logger from './logger'
import User from '../models/user'

import { IRequestWithTokenAndUser, IDecodedToken } from '../types'

const requestLogger = (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  logger.info('Method: ', request.method)
  logger.info('Path: ', request.path)
  logger.info('Body: ', request.body)
  logger.info('---')
  next()
}

const errorHandler = (
  error: { message: any; name: string },
  _request: Request,
  response: Response,
  next: NextFunction
) => {
  logger.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({ error: 'invalid token' })
  } else if (error.name === 'TokenExpiredError') {
    return response.status(401).json({ error: 'token expired' })
  }
  next()
}

const tokenExtractor = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    ;(request as IRequestWithTokenAndUser).token = authorization.replace(
      'Bearer ',
      ''
    )
  }
  next()
}

const userExtractor = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    ;(request as IRequestWithTokenAndUser).token = authorization.replace(
      'Bearer ',
      ''
    )
    const decodedToken = jwt.verify(
      (request as IRequestWithTokenAndUser).token,
      process.env.SECRET as string
    ) as IDecodedToken

    if (!decodedToken) {
      return response.status(401).json({ error: 'unauthorized' }).end()
    }

    ;(request as IRequestWithTokenAndUser).user = await User.findById(
      decodedToken.id
    )
    if (!(request as IRequestWithTokenAndUser).user)
      throw new Error(`Cannot find user from token`)
  }
  next()
}

export default { requestLogger, errorHandler, tokenExtractor, userExtractor }

