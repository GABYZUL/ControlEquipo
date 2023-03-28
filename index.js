//npm install
//npm install --save express
//npm install --save pg
//npm install --save pg-hstore
//npm install --save body-parser
//npm install cors --save
//npm install crypto-js
//npm i --save crypto-js @types/crypto-js

//REINICIEN VISUAL STUDIO CODE

//CUANDO VUELVA A ABRIR EJECUTAN LO SIGUIENTE:
//ng serve
//node index.js


const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
)

app.get('/',(request, response)=>{
    response.json({info:'Node.js, Express, API in Postgres'})
})

// // metodos de tipo usuario
// app.get('/tipousuario',db.getTipousuario)
// app.get('/tipousuario/:id',db.getTipousuarioPorId)
// app.post('/tipousuario',db.crearTipousuario)
// app.put('/tipousuario/:id',db.actualizarTipousuario)
// app.delete('/tipousuario/:id',db.eliminarTipousuario)


// // metodos de equipos (Acumulados)

app.get('/acumulado', db.getEquipo)
app.get('/acumulado/:id', db.getEquipoById)
app.post('/acumulado', db.crearEquipo)
app.put('/acumulado/:id',db.actualizarEquipo)
app.delete('/acumulado/:id', db.eliminarEquipo)
// metodos de usuario
app.get('/usuarios',db.getUsuario)
app.get('/usuarios/:numtrabajador',db.getUsuarioPorId)
app.get('acumulado/estatus',db.getTotalDisponibles)
// app.post('/usuario',db.crearUsuario)
// app.put('/usuario/:id',db.actualizarUsuario)
// app.delete('/usuario/:id',db.eliminarUsuario)


app.listen(port, ()=>{console.log(`APP running in port ${port}.`)
})
