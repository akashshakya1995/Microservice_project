const orderRouter = require("express").Router();
const { jwtVerify } = require("../helper/authHandler")
const { orderPlace, getOrder } = require("../controller/orderCtrl")

orderRouter.post("/order_place", jwtVerify, orderPlace)
orderRouter.get("/getorder", jwtVerify, getOrder)
module.exports = orderRouter