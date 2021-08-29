import { Request, Response } from 'express';
import { connection } from "../data/connection";

export default async function showStudents(req: Request, res: Response) {
  let errorCode = 400;
  try {
    const id = req.params.id;

    const result = await connection.raw(`SELECT ROUND(DATEDIFF("2021-01-01", data_nasc)/365) as idade FROM ESTUDANTE WHERE id = ${id};`
    )
    res.status(200).send({ estudante: result[0][0] })
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}