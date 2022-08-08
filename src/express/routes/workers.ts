const {models} = require("../../sequelize")



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


async function getAll(req, res) {
	const workers = await models.worker.findAll();
    console.log('Work getAll')
    res.send(workers)
};


module.exports = {
    getAll,
    create
}