const gateway = require('fast-gateway');
const rateLimit = require('express-rate-limit')
const requestIp = require('request-ip')

const PORT = 9000

const server = gateway({
    // middlewares: [
    //     // first acquire request IP
    //     (req, res, next) => {
    //       req.ip = requestIp.getClientIp(req)
    //       return next()
    //     },
    //     // second enable rate limiter
    //     rateLimit({
    //       windowMs: 1 * 60 * 1000, // 1 minutes
    //       max: 5, // limit each IP to 60 requests per windowMs
    //       handler: (req, res) => res.send('Too many requests, please try again later.', 429)
    //     })
    //   ],
    routes: [
        {
            prefix: '/microservice/user',
            target: 'http://localhost:8000/',
            methods: ['GET', 'DELETE', 'PATCH', 'POST', 'PUT', 'OPTIONS']
        },
        {
            prefix: '/microservice/order',
            target: 'http://localhost:8001/',
            methods: ['GET', 'DELETE', 'PATCH', 'POST', 'PUT', 'OPTIONS']
        }
    ]
})


server.get("/get", function (req, res) { return res.send("Api gateway called successfully!!") })
server.start(PORT).then(_ => console.log("Api gateway is running 9000 port"))