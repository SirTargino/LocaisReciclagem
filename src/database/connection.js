// db.mjs

import { Sequelize } from 'sequelize';
import "dotenv/config";

// Crie uma instância Sequelize passando a URL de conexão
const sequelize = new Sequelize(process.env.db_url, {
  logging: false,
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    // Sincronize os modelos com o banco de dados, se necessário
    // await sequelize.sync({ alter: true });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

export { sequelize, connectToDatabase };
