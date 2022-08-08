const {models} = require("../../sequelize")
import {checkId} from "../idChecker"


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
    update
}