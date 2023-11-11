import express from 'express'
import jwt from 'jsonwebtoken'

import User from '../models/user'
import Interest from '../models/interest'

import { IDecodedToken } from '../types'

const interestRouter = express.Router()

const getTokenFrom = (req: express.Request) => {
  const authorization = req.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  }
  return ''
}

interestRouter.get('/', async (req, res) => {
  const interests = await Interest.find({}).populate('including', {
    username: 1,
    name: 1,
  })

  res.json(interests)
})

interestRouter.get('/:id', async (req, res) => {
  const interest = await Interest.findById(req.params.id).populate(
    'including',
    {
      username: 1,
      name: 1,
    }
  )

  interest
    ? res.json(interest)
    : res.status(404).json({ error: 'interestNotFound' }).end()
})

// ts doesn't know about 'id' in decodedToken, so we define it

interestRouter.post('/', async (req, res) => {
  const decodedToken = jwt.verify(
    getTokenFrom(req),
    process.env.SECRET!
  ) as IDecodedToken

  if (!decodedToken)
    return res.status(401).json({ error: 'unauthorized' }).end()

  const user = await User.findById(decodedToken.id)
  if (!user) return res.status(401).json({ error: 'unauthorized' }).end()
  if (!user.isAdmin) return res.status(401).json({ error: 'notAdmin' }).end()

  const body = req.body
  if (!body.interstName)
    return res.status(400).json({ error: 'missingInterestName' }).end()

  const interest = new Interest({
    interestName: body.recipeName,
  })

  const savedInterest = await interest.save()
  res.status(201).json(savedInterest)
})

interestRouter.delete('/:id', async (req, res) => {
  const decodedToken = jwt.verify(
    getTokenFrom(req),
    process.env.SECRET!
  ) as IDecodedToken

  if (!decodedToken)
    return res.status(401).json({ error: 'unauthorized' }).end()

  const user = await User.findById(decodedToken.id)
  if (!user) return res.status(401).json({ error: 'unauthorized' }).end()
  if (!user.isAdmin) return res.status(401).json({ error: 'notAdmin' }).end()

  const interest = await Interest.findById(req.params.id).populate(
    'including',
    {
      username: 1,
      name: 1,
    }
  )
  if (!interest)
    return res.status(404).json({ error: 'interestNotFOund' }).end()

  // find all users with the interest
  const usersWithInterest = await User.find({
    interests: req.params.id,
  })
  const updatePromise = usersWithInterest.map((user) =>
    User.findByIdAndUpdate(
      user.id,
      {
        $pull: { interests: req.params.id },
      },
      { new: true }
    )
  )
  await Promise.all(updatePromise)

  await Interest.findByIdAndRemove(req.params.id)
  res.status(204).end()
})

export default interestRouter
