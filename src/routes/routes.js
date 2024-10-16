import express from 'express'
import { createUser } from '../controllers/user.js'
const router = express.Router()


router.get('/', (req, res) => {
    res.send("Hi")
})

router.post('/users', createUser)

export default router