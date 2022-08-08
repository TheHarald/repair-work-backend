const { Sequelize } = require('sequelize');
import { DatabaseConfig } from '../sequelize/db.config';


const sequelize = new Sequelize(
    DatabaseConfig.database,
    DatabaseConfig.username, 
    DatabaseConfig.password,{ 
        dialect:'mysql',
        host:'localhost'
    })


const modelDefiners  = [
    require("./models/worker.model"),
    ]

//define tabels
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
    console.log('define')
}

// define relationships

// here


module.exports = sequelize;