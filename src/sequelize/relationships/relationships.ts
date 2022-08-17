import { Sequelize } from "sequelize";

export function makeRealtionships(sequelize:Sequelize){

    const { worker, request, email_ban} = sequelize.models
    worker.hasMany(request)
    request.hasOne(email_ban)

}