export type turma = {
   id: string
   nome: string
   data_inicio: string
   data_final: string
   modulo: string
}

export type estudante = {
   id: string
   nome: string
   email: string
   data_nasc: string
   turma_id: string
}


export type docente = {
   id: string
   nome: string
   email: string
   data_nasc: string
   turma_id: string
}