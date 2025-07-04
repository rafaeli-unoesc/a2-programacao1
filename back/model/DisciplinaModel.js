import { DataTypes } from "sequelize";
import banco from "../banco.js";

//mapeamento da model Disciplina
export default banco.define(
    'disciplina',
    {
        // Model attributes are defined here
        iddisciplina: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nomedisciplina: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        fase: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);