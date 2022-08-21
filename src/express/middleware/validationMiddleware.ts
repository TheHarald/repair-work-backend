import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
const { check, validationResult } = require('express-validator');



export function checkValidation(req:Request,res:Response,next:NextFunction){
    if(req.method === 'OPTIONS'){
        next()
    }
    const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(400).json({ message: errors.array()});
            }
    next()
}
