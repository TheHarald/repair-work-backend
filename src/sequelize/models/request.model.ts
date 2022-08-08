import { DataTypes, Sequelize } from 'sequelize';

module.exports = (sequelize:Sequelize)=>{
    sequelize.define("request",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        room:{
            type:DataTypes.STRING,
            allowNull:false
        
        },
        request_task:{
            type:DataTypes.STRING,
            allowNull:false
        
        },
        sender_FIO:{
            type:DataTypes.STRING,
            allowNull:false
        
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        
        },
        status:{
            type:DataTypes.STRING,
            allowNull:false
        
        },
        start_time_to_arrive:{
            type:DataTypes.STRING,
        
        },
        end_time_to_arrive:{
            type:DataTypes.STRING,
        
        }
    })
}