import express from "express";
import  {Request, Response } from 'express';
const {models} = require("../../sequelize")

export const emailBanRouter = express.Router()


emailBanRouter.get('/',async function (req:Request, res:Response) {
	const emailBan = await models.email_ban.findAll();
    res.send(emailBan)
})

emailBanRouter.get('/:email',async function(req, res) {
    const email = req.params.email
	const emailBan = await models.email_ban.findOne({where:{
        email:email
    }});
	if (emailBan) {
        res.status(200).json(emailBan)
	} else {
        res.status(404).send('404 - Not found');
	}
})