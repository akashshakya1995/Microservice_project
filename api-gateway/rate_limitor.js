const rateLimit = require('express-rate-limit')
const requestIp = require('request-ip')

const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 1, // limit each IP to 60 requests per windowMs
    handler: function (req, res) {
        req.ip = requestIp.getClientIp(req)
        return res.send(`Too many requests, please try again later.${req.ip}`, 429)
    }
})


module.exports = { apiLimiter }