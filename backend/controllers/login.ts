import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import User from '../models/user'

const loginRouter = express.Router()

loginRouter.post('/', async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })
  const passwordCorrect =
    user === null ? false : bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect))
    return res.status(401).json({ error: 'invalidUsernameOrPassword' }).end()

  const userForToken = {
    username: user.username,
    id: user.id,
  }

  const token = jwt.sign(userForToken, process.env.SECRET!)

  // const expiresIn = 5000
  // const token = jwt.sign(userForToken, process.env.SECRET!, { expiresIn })

  res.status(200).send({ token, username: user.username, id: user.id })
})

export default loginRouter
