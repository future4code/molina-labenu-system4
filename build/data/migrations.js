"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const labenu_system_json_1 = __importDefault(require("./labenu_system.json"));
const printError = (error) => { console.log(error.sqlMessage || error.message); };
const createTables = () => connection_1.connection
    .raw(`

      CREATE TABLE IF NOT EXISTS novaTurma (
      id INT NOT NULL PRIMARY KEY,
      data_inicio DATE NOT NULL,
      data_final DATE NOT NULL,
      modulo INT NOT NULL

      );
      CREATE TABLE IF NOT EXISTS novoEstudante (
      id INT NOT NULL PRIMARY KEY,
      nome VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL UNIQUE,
      data_nasc DATE NOT NULL,
      turma_id INT NOT NULL,
      FOREIGN KEY (turma_id) REFERENCES TURMA(id)
      );
      `)
    .then(() => { console.log("Tabelas criadas"); })
    .catch(printError);
const insertUsers = () => connection_1.connection("labenu_system")
    .insert(labenu_system_json_1.default)
    .then(() => { console.log("Tabela Criada"); })
    .catch(printError);
const closeConnection = () => { connection_1.connection.destroy(); };
createTables()
    .then(insertUsers)
    .finally(closeConnection);
