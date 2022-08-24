import { NextFunction, Request, Response } from "express";
const jwt = require('jsonwebtoken')
require('dotenv').config()

export function checkAuth(req,res:Response,next:NextFunction){
    if(req.method === 'OPTIONS'){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            res.status(403).send({message:"Пользователь не авторизован"})
        }
        const decodedData = jwt.verify(token,process.env.JWY_SECRET)
        next()
    }catch(e){
        console.log(e);
        res.status(403).send({message:"Пользователь не авторизован"})
    }   

    
}