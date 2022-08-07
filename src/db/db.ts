import { Sequelize, DataTypes} from 'sequelize';
import { DatabaseConfig } from './db.config';




export const initDataBase = ()=>{
    const sequelize:Sequelize = new Sequelize(
        DatabaseConfig.database,
        DatabaseConfig.username, 
        DatabaseConfig.password,{ 
            dialect:'mysql',
            host:'localhost'
        })
    //create workers table
    const Worker = sequelize.define("worker",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
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

        //create Requests table
        const RepairRequest = sequelize.define("request",{
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
            
            },
            id_worker:{
                type:DataTypes.INTEGER,
                allowNull:true
            }
        })


        //create EmailBan table
        const EmailBan = sequelize.define("emal_ban",{
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            email:{
                type:DataTypes.STRING,
                allowNull:false
            
            },
            send_time:{
                type:DataTypes.DATE,
                allowNull:false
            }
        })

        try {
            sequelize.authenticate()
            console.log('Соединение с БД было успешно установлено')
          } catch (e) {
            console.log('Невозможно выполнить подключение к БД: ', e)
          }
        (async () => {
            await sequelize.sync({ force: true });
          })();
    
}





    
