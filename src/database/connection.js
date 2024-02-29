import { Sequelize } from "sequelize";

//Database connection

const sequelize = new Sequelize('locais_reciclagem', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

//Connection test

async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch(error){
        console.log("Error")
    }
}

export {sequelize, testConnection};
