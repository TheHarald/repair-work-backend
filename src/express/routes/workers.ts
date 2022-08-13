import { Request, Response } from 'express';
const {models} = require("../../sequelize")
import {checkId} from "../idChecker"
import { generateJwtToken } from '../tokenGenerator';
const bcrypt = require('bcrypt')



async function registerWorker(req:Request,res:Response) {

    const {password, login, worker_FIO} = req.body;
    const worker = await models.worker.findOne({where:{
        login:login
    }})

    if(worker){
        return res.status(400).send(`Работник с логином: ${login} уже существует`)
    }

    const hashPassword = bcrypt.hashSync(password,7)
    const newWorker = await models.worker.create({
        worker_FIO,
        login,
        password:hashPassword
    })
    res.status(200).send(newWorker)

}


async function loginWorker(req:Request,res:Response) {
    const {password, login} = req.body;
    const worker = await models.worker.findOne({where:{
        login:login
    }})

    if(worker){
       const isMatchedPassword = bcrypt.compareSync(password,worker.password)
       if(!isMatchedPassword){
            return res.status(400).send({message:`Введён неправильный пароль`})
       }

        const token = generateJwtToken({...worker.dataValues})
        return res.status(200).send(token)

    }else{
        return res.status(400).send({message:`Работник с логином: ${login} не найден`})
    }

}






async function create(req, res) {
    if(req.body.id){
        res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
    }else{
        console.log(req.body)
        const worker = await models.worker.create(req.body)
        console.log(worker)
        res.send(worker.dataValues)
    }
}

async function getById(req, res) {
	const id = checkId(req);
	const worker = await models.worker.findByPk(id);
	if (worker) {
		res.status(200).json(worker);
	} else {
		res.status(404).send('404 - Not found');
	}
};


async function getAll(req, res) {
	const workers = await models.worker.findAll();
    console.log('Work getAll')
    res.send(workers)
};


async function removeById(req, res) {
	const id = checkId(req);
    const deletedWorker = await models.worker.destroy({
        where: {
            id: id
        }
    }).then( (del) =>{
        return del
    });

    res.status(200).json(deletedWorker)
};


async function update(req, res) {
	const id = checkId(req);
    console.log(id)
	if (id) {
		const workers = await models.worker.update(req.body, {
			where: {
				id: id
			}
		});
		res.status(200).json(workers);
	} else {
		res.status(400).send(`Bad request: param ID (${id}) does not vlid.`);
	}
};


module.exports = {
    getAll,
    create,
    getById,
    removeById,
    update,
    registerWorker,
    loginWorker
}