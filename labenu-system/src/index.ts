import app from "./app"
import createStudent from './endpoints/createStudent'
import createClass from './endpoints/createClass'
import createDocente from './endpoints/createDocente'

app.post('/turma/create', createClass )
app.post('/docente/create', createDocente)
app.post('/students/create', createStudent)

