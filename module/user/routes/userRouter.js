const userRouter = require("express").Router();
const { jwtVerify } = require("../helper/authHandler")
const { signUp, signIn, getUser } = require("../controller/userCtrl")
const { apiLimiter } = require("../../../api-gateway/rate_limitor")

userRouter.post("/signup", signUp)
userRouter.post("/signin", signIn)
userRouter.get("/getuser", apiLimiter, jwtVerify, getUser)
module.exports = userRouter