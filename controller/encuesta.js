const { response } = require('express')
const { find } = require('../models/encuesta')
const encuestas = require('../models/encuesta')
const enc = require('../models/encuesta')

const getEncuesta = async (req, res = response) => {
    // const { nombre, raza, peso } = req.query
    const encuesta = await encuestas.find()
    res.json({
        msg: 'GET API encuesta',
        encuesta
    })
}

const postEncuesta = async (req, res) => {
    //Desestructuracion
    const { nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const encuesta = new enc({ nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado })


    await encuesta.save()

    res.json({
        msg: 'POST API encuesta',
        encuesta
    })
}

const deleteEncuesta = async(req,res)=>{


        const  { nombreEncuesta } = req.query
        const encuesta = await enc.findOneAndDelete({nombreEncuesta : nombreEncuesta})

        res.json({
            msg: 'Delete api encuesta',
            encuesta
        })

}

const putEncuesta = async (req,res) => {

    const {nombreEncuesta, newnombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    const modificar = await enc.findOneAndUpdate({nombreEncuesta : nombreEncuesta}, {nombreEncuesta: newnombreEncuesta, fecha:fecha , documentoEncuestado:documentoEncuestado, nombreEncuestado:nombreEncuestado, edad:edad, genero:genero, empleado:empleado})

    res.json({
        msg:'Put api encuesta',
        modificar
    })

}


const patchEncuesta = async (req,res) =>{
    const{nombreEncuesta, edad, genero} = req.body
    const patch = await enc.findOneAndUpdate({nombreEncuesta : nombreEncuesta},{edad: edad, genero:genero})

    res.json({
        msg:'PATCH API encuesta',
        patch
    })
}

module.exports = {
    getEncuesta,
    postEncuesta,
    deleteEncuesta,
    putEncuesta,
    patchEncuesta
}