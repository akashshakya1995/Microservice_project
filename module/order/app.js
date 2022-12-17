const app = require("express")()
const bodyParser = require("body-parser")
const morgan = require("morgan")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { baseRouter } = require("./helper/routerHandler")

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,Content-Type,Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.get("/", function (req, res) {
    return res.send("Hello Order server call here!!")
})

app.use(morgan('combined'))
app.use(baseRouter)

app.use((req, res, next) => {
    const error = new Error("route Not found..");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: { message: error.message } });
});


module.exports = app



