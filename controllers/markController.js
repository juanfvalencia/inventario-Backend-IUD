const Mark = require('../models/Mark');

const getAllMark = async (req, res) => {
    try {
        const mark = await Mark.find();
        res.send(mark);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al tratar de consultar una marca.')        
    }
}

const getMarkById = async (req, res) => {
    try {
        const mark = await Mark.findById(req.params.markId)
        if(!mark){
            return res.status(404).send('La marca no existe');
        } 
        res.send(mark)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar la marca');
    }
}

const createdMark = async (req, res) => {
    
    try {
        let mark = new Mark();

        mark.name = req.body.name;
        mark.state = req.body.state;
        mark.createDate = new Date();
        mark.updateDate = new Date();

        mark = await mark.save();
        res.send(mark)

    } catch (error) {
        console.log(error)
        res.status(500).send('Ocurrio un error al tratar de crear una nueva marca.')
    }
}

const updatedMark = async (req, res) => {
    try {
        let mark = await Mark.findById( req.params.markId );

        if(!mark){
            return res.status(400).send('La marca no existe.')
        }

        mark.name = req.body.name;
        mark.state = req.body.state;
        mark.updateDate = new Date();

        mark = await mark.save();
        res.send(mark);

    } catch (error) {
        console.log(error)
        res.status(500).send('Ocurrio un error al tratar de actualizar la marca.')
    }
}

module.exports = {
    getAllMark,
    getMarkById,
    createdMark,
    updatedMark,
}