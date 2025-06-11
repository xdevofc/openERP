const users = require('./data/dummyDB')
const express = require('express')
const cors = require('cors')

const {sequelize, members} = require('./models/index')

const app = express()
app.use(cors())
const port = 3000 

app.get('/', (req, res) =>{
    res.send("Hello world")
})

app.get('/api/users', (req,res) =>{
    res.send(users)
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})


async function Connect(){

    // connecting to de db
    try{
        await sequelize.authenticate();
        console.log('Coneccion hecha con exito')

        // sync models 
        await sequelize.sync({alter:true})

        const nuevoMiembro = await members.create({
            nombre_miembro: 'nombre1',
            apellido_miembro: 'apellido1', 
            ci_miembro:'xxx-xxx-xxx',
            fecha_nacimiento_miembro:'2012-12-29',
            fecha_asuncion_miembro: '2019-12-13',
            rol_miembro:'VP'
        })


        console.log( 'Miembro agregado', nuevoMiembro.toJSON())

    }catch(error){
        console.error('Error al conectarse en la bd', error)
    }finally {
        await sequelize.close(); // cerrar conexión al final
        console.log('Conexión cerrada');
    }
}


Connect();