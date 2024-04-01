import { sequelize } from "../database/connection.js";

import { DataTypes, Sequelize } from "sequelize";

export const LocalEntity = sequelize.define('Locals', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    local_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    informacoes: {
        type: DataTypes.TEXT
    },
    cep: {
        //Nesse caso, o CEP é definido como STRING para facilitar o tratamento de dados, pois pode iniciar com 0. Um INTEGER inicado por 0 desconsidera o primeiro número.
        type: DataTypes.STRING(8),
        allowNull: false
    },
    rua: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});