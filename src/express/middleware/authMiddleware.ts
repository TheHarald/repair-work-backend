import { NextFunction, Request, Response } from "express";
import { jwtConfig } from "../jwt.config";
const jwt = require('jsonwebtoken')

export function checkAuth(req,res:Response,next:NextFunction){
    if(req.method === 'OPTIONS'){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            res.status(403).send({message:"Пользователь не авторизован"})
        }
        const decodedData = jwt.verify(token,jwtConfig.secret)
        next()
    }catch(e){
        console.log(e);
        res.status(403).send({message:"Пользователь не авторизован"})
    }   

    
}