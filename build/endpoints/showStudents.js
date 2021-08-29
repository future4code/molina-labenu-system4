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
function showStudents(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let errorCode = 400;
        try {
            const id = req.params.id;
            const result = yield connection_1.connection.raw(`SELECT ROUND(DATEDIFF("2021-01-01", data_nasc)/365) as idade FROM ESTUDANTE WHERE id = ${id};`);
            res.status(200).send({ estudante: result[0][0] });
        }
        catch (error) {
            res.status(errorCode).send({ message: error.message });
        }
    });
}
exports.default = showStudents;
