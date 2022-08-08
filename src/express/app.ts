import express, { Express, Request, Response } from 'express';
const bodyParser = require('body-parser');

const routes = {
    workers: require("./routes/workers"),
    requests: require("./routes/request"),
    email_bans:require("./routes/emailBans")
}


const app:Express = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//workers
app.get("/api/workers",  routes.workers.getAll)
app.post("/api/workers", routes.workers.create)
app.delete("/api/workers/:id", routes.workers.removeById)
app.get("/api/workers/:id", routes.workers.getById)
app.patch("/api/workers/:id", routes.workers.update)

// requests
app.post("/api/requests", routes.requests.create)
app.delete("/api/requests/:id", routes.requests.removeById)
app.get("/api/requests", routes.requests.getAll)
app.get("/api/requests/:id", routes.requests.getById)

//emailBans
app.get("/api/email_bans",  routes.email_bans.getAll)
app.get("/api/email_bans/:email",  routes.email_bans.getByEmail)

module.exports = app