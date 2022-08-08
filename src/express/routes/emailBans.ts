import  {Request, Response } from 'express';
const {models} = require("../../sequelize")


async function getAll(req:Request, res:Response) {
	const emailBan = await models.email_ban.findAll();
    res.send(emailBan)
};


async function getByEmail(req, res) {
    const email = req.params.email
	const emailBan = await models.email_ban.findOne({where:{
        email:email
    }});
	if (emailBan) {
        res.status(200).json(emailBan)
	} else {
        res.status(404).send('404 - Not found');
	}
};



module.exports = {
    getAll,
    getByEmail
}