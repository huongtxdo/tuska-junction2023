import express from 'express'
import bcrypt from 'bcrypt'

const createAdminUser = async () => {
  try {
    const adminUserData = {
      username: 'admin',
      password: 'adminpassword',
      isAdmin: true,
    }

    const adminUser = await User.create(adminUserData)
    console.log('Admin user created:', adminUser)
  } catch (error) {
    console.error('Error creating admin user:', error)
  }
}

adminRouter.post('/', async (req, res) => {
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

// Call the function to create an admin user
createAdminUser()
