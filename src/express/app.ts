const express = require('express');
const bodyParser = require('body-parser');

const routes = {
    workers: require("./routes/workers")
}


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res)=>{
    res.send("api main page")
})

app.get("/api/workers", (req,res)=>{
    routes.workers.getAll(req,res)
})
app.post("/api/workers", (req,res)=>{
    routes.workers.create(req,res)
})

module.exports = app