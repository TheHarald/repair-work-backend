import  {Request, Response } from 'express';
import { where } from 'sequelize/types';
import { checkEmail } from '../emailBaner';
const {models} = require("../../sequelize")
import {checkId} from "../idChecker"


async function create(req:Request, res:Response) {
    if(req.body.id){
        res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
    }else{

        if(await checkEmail(req,models.email_ban) ){

            const request = await models.request.create(req.body)
            const emailBan  = await models.email_ban.update(
                {requestId:request.dataValues.id}, 
                {where:{email:request.dataValues.email}})
                
            res.status(400).send(request)
        }else{
            res.status(405).send("Email находится в бане")  
        }
        
    }
}


async function getAll(req:Request, res:Response) {
	const request = await models.request.findAll();
    res.send(request)
};


async function getById(req, res) {
	const id = checkId(req);
	const request = await models.request.findByPk(id);
	if (request) {
		res.status(200).json(request);
	} else {
		res.status(404).send('404 - Not found');
	}
};


async function removeById(req, res) {
	const id = checkId(req);
    const deletedRequest = await models.request.destroy({
        where: {
            id: id
        }
    }).then( (del) =>{
        return del
    });

    res.status(200).json(deletedRequest)
};


module.exports = {
    create,
    getAll,
    getById,
    removeById
}

