import express from 'express'
import bcrypt from 'bcrypt'

import User from '../models/user'

const usersRouter = express.Router()

usersRouter.get('/', async (_req, res) => {
  const users = await User.find({}).populate('interests', {
    interestName: 1,
  })

  res.json(users)
})

usersRouter.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id).populate('interests', {
    interestName: 1,
  })

  user ? res.json(user) : res.status(404).json({ error: 'userNotFound' }).end()
})

usersRouter.post('/', async (req, res) => {
  const { username, password } = req.body

  const existingUsername = await User.findOne({ username })
  if (existingUsername)
    return res.status(400).json({ error: 'existingUsername' }).end()

  if (password.length < 6)
    return res.status(400).json({ error: 'passwordMinLength6' }).end()

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({ username, passwordHash, isAdmin: false })
  const savedUser = await user.save()

  res.status(201).json(savedUser)
})

export default usersRouter
