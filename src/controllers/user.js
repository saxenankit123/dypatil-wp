import { create } from "../services/user.js"

export function createUser(req, res) {

    let data = req.body

    try {
        create(data)
        res.status(200).json({ message: "user created" })
    } catch (err) {
        res.status(err.statusCode).json({ message: err.message })
    }
}