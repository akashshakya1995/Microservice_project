const baseRouter = require("express").Router()
const userRouter = require("../routes/userRouter")

baseRouter.use(userRouter)
module.exports = { baseRouter }