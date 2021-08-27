import { connection } from "./connection"
import labenu_system from "./labenu_system.json"


// Migrations Novo Estudante
const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
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

   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertUsers = () => connection("labenu_system")
   .insert(labenu_system)
   .then(() => { console.log("Tabela Criada") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .finally(closeConnection)

  
  

   




