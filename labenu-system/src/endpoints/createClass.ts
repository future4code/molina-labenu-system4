import { Request, Response } from "express";
import { connection } from "../data/connection";
import { turma } from "../types";

export default async function createClass(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { id, nome,  data_inicio, data_final, modulo  } = req.body

      if ( !id || !nome ||  !data_inicio || !modulo || !data_final) {
         res.statusCode = 422
         throw "'nome', 'data de Nascimento', 'email' e 'id da turma' são obrigatórios"
      }

      const newClass: turma = { id, nome, data_inicio , data_final,  modulo }

      await connection('TURMA').insert(newClass)

      res.status(201).send("Turma Nova Criada com Sucesso!")

   } catch (error) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }
   }
}