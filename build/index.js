"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const createStudent_1 = __importDefault(require("./endpoints/createStudent"));
const createClass_1 = __importDefault(require("./endpoints/createClass"));
const createDocente_1 = __importDefault(require("./endpoints/createDocente"));
const showStudents_1 = __importDefault(require("./endpoints/showStudents"));
app_1.default.post('/turma/create', createClass_1.default);
app_1.default.post('/docente/create', createDocente_1.default);
app_1.default.post('/students/create', createStudent_1.default);
app_1.default.get('/students/:id', showStudents_1.default);
