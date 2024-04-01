// db.mjs

import { Sequelize } from 'sequelize';

// Defina a URL de conexão com o banco de dados
const databaseUrl = 'postgres://default:oIcsrgKjS9k1@ep-silent-tooth-a4lfr4mg.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require';

// Crie uma instância Sequelize passando a URL de conexão
const sequelize = new Sequelize(databaseUrl);

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