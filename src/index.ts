import express, { Express, Request, Response, text } from 'express';
import { Sequelize, DataTypes} from 'sequelize';
import { DatabaseConfig } from '../db.config';

const app:Express = express()
const PORT:number = 3001;

const sequelize:Sequelize = new Sequelize(
    DatabaseConfig.username, 
    DatabaseConfig.database,
    DatabaseConfig.password,{ 
        dialect:'mysql',
        host:'localhost'
    })

interface IRequest {
    title:string,
    text:string,
    room:string
}


const Request = sequelize.define("request",{
    title:DataTypes.STRING,
    text:DataTypes.STRING,
    room:DataTypes.STRING,

})

Request.create({
    title:"some",
    text:"some1",
    room:"some2"
})






app.get("/", (req:Request, res:Response)=>{
    res.send("HsdfssdsdE")
})


app.listen(PORT,()=>{
    try {
        sequelize.authenticate()
        console.log('Соединение с БД было успешно установлено')
      } catch (e) {
        console.log('Невозможно выполнить подключение к БД: ', e)
      }
    (async () => {
        await sequelize.sync({ force: false });
        // Code here
      })();
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})


