import { Request, Response } from "express";
import { connection } from "../data/connection";
import { docente } from "../types";

export default async function createStudent(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { id, nome, email, data_nasc, turma_id  } = req.body

      if (!nome || !id || !email || !data_nasc || !turma_id) {
         res.statusCode = 422
         throw "'nome', 'data de Nascimento', 'email' e 'id da turma' são obrigatórios"
      }

      const newTeacher: docente = { id, nome, data_nasc, email, turma_id }

      await connection('DOCENTE').insert(newTeacher)

      res.status(201).send("Docente Criado criado!")

   } catch (error) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }
   }
}