const baseRouter = require("express").Router()
const userRouter = require("../routes/orderRouter")

baseRouter.use(userRouter)
module.exports = { baseRouter }