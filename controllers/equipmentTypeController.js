const EquipmentType = require('../models/EquipmentType');

const getAllEquipmentType = async(req, res) => {
    try {
        const equipmentType = await EquipmentType.find();
        res.send(equipmentType);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar los tipos de equipos.')
    }
}

const getEquipmentTypeById = async(req, res) => {
    try {
        const equipmentType = await EquipmentType.findById(req.params.equipmentTypeId);
        if(!equipmentType){
            return res.status(404).send('El tipo no existe');
        }
        res.send(equipmentType)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar el tipo');
    }
}

const createdEquipmentType = async(req, res) => {
    try {  
        let equipmentType = new EquipmentType();

        equipmentType.name = req.body.name;
        equipmentType.state = req.body.state;
        equipmentType.createDate = new Date();
        equipmentType.updateDate = new Date();

        equipmentType = await equipmentType.save();
        res.send(equipmentType);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al intentar crear un tipo de equipo.');
    }
}

const updatedEquipmentType = async(req, res) => {
    try {

        let equipmentType = await EquipmentType.findById(req.params.equipmentTypeId);

        if(!equipmentType){
            return res.status(400).send('El tipo de equipo no existe.')
        }

        equipmentType.name = req.body.name;
        equipmentType.state = req.body.state;
        equipmentType.updateDate = new Date();
        
        equipmentType = await equipmentType.save();
        res.send(equipmentType);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al intentar actualizar el tipo de equipo')
        
    }
}

module.exports = {
    getAllEquipmentType,
    getEquipmentTypeById,
    createdEquipmentType,
    updatedEquipmentType
}