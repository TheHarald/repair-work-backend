import { DataTypes, Sequelize } from 'sequelize';

module.exports = (sequelize:Sequelize)=>{
    sequelize.define("email_ban",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        unban_time:{
            type:DataTypes.DATE,
            allowNull:false

        }
    })
}