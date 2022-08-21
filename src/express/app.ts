import express, { Express, Request, Response } from 'express';
import { checkAuth } from './middleware/authMiddleware';
import { checkValidation } from './middleware/validationMiddleware';
import { validatedFields } from './middleware/validationSchema';
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const cors = require('cors');

const routes = {
    workers: require("./routes/workers"),
    requests: require("./routes/request"),
    email_bans:require("./routes/emailBans")
}


const app:Express = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin:"*"
}))


//auth
app.post("/api/workers/registration",  routes.workers.register)
app.post("/api/workers/login",  routes.workers.login)


//workers
app.get("/api/workers", checkAuth,  routes.workers.getAll)
app.get("/api/worker/info", checkAuth,  routes.workers.getByToken)
app.post("/api/workers", routes.workers.create)
app.delete("/api/workers/:id", checkAuth, routes.workers.removeById)
app.get("/api/workers/:id", checkAuth, routes.workers.getById)
app.patch("/api/workers/:id", checkAuth, routes.workers.update)

// requests
app.post("/api/requests", validatedFields ,checkValidation, routes.requests.create)
app.delete("/api/requests/:id", checkAuth, routes.requests.removeById)
app.get("/api/requests", checkAuth, routes.requests.getAll)
app.get("/api/requests/:id",checkAuth, routes.requests.getById)
app.patch("/api/requests/:id",checkAuth, routes.requests.update)

//emailBans
app.get("/api/email_bans",  routes.email_bans.getAll)
app.get("/api/email_bans/:email",  routes.email_bans.getByEmail)

module.exports = app