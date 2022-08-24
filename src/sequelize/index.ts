const { Sequelize } = require('sequelize');
import { makeRealtionships } from './relationships/relationships';
require('dotenv').config()



const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD,{ 
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