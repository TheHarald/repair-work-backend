const application = require("./express/app");
const sequelize = require("./sequelize");
const PORT:number = 3001;



async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.sync({});
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
	}
}


async function init() {
	await assertDatabaseConnectionOk();

	console.log(`Starting Sequelize + Express example on port ${PORT}...`);

	application.listen(PORT, () => {
		console.log(`Express server started on port ${PORT}. Try some routes, such as '/api/workers'.`);
	});
}

init()



