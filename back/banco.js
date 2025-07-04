import { Sequelize } from "sequelize";

//configuração da conexão com o banco de dados
const sequelize = new Sequelize('a2', 'postgres', 'postgres', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

export default sequelize;