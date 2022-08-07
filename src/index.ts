import { initDataBase } from './db/db';
import express, { Express, Request, Response, text } from 'express';

const app:Express = express()
const PORT:number = 3001;

app.get("/api", (req:Request, res:Response)=>{
    res.send("api main page")
})


app.get("/api/tasks", (req:Request, res:Response)=>{
    res.send(
        {id:"123",
        title:"spme task"}
    )
})


app.listen(PORT,()=>{
    initDataBase()
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}/api/`)
})


