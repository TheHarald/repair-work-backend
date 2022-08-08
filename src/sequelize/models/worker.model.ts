import { DataTypes, Sequelize } from 'sequelize';


module.exports = (sequelize:Sequelize)=>{
    sequelize.define("worker",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true
        },
        worker_FIO:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        login:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })

}
