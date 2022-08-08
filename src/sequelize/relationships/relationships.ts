import { Sequelize } from "sequelize";

export function makeRealtionships(sequelize:Sequelize){

    const { worker, request, email_ban} = sequelize.models
    request.hasOne(worker)
    request.hasOne(email_ban)

}