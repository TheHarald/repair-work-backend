const { Sequelize } = require('sequelize');
import { DatabaseConfig } from '../sequelize/db.config';
import { makeRealtionships } from './relationships/relationships';


const sequelize = new Sequelize(
    DatabaseConfig.database,
    DatabaseConfig.username, 
    DatabaseConfig.password,{ 
        dialect:'mysql',
        host:'localhost'
    })


const modelDefiners  = [
    require("./models/worker.model"),
    require("./models/request.model"),
    require("./models/emailBan.model"),
    ]

//define tabels
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

// define relationships
makeRealtionships(sequelize)


module.exports = sequelize;