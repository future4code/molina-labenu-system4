"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../data/connection");
function createStudent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id, nome, email, data_nasc, turma_id } = req.body;
            if (!nome || !id || !email || !data_nasc || !turma_id) {
                res.statusCode = 422;
                throw "'nome', 'data de Nascimento', 'email' e 'id da turma' são obrigatórios";
            }
            const newUser = { id, nome, data_nasc, email, turma_id };
            yield connection_1.connection('ESTUDANTE').insert(newUser);
            res.status(201).send("Aluno Criado criado!");
        }
        catch (error) {
            if (typeof error === "string") {
                res.send(error);
            }
            else {
                console.log(error.sqlMessage || error.message);
                res.status(500).send("Ops! Um erro inesperado ocorreu =/");
            }
        }
    });
}
exports.default = createStudent;
