const EquipmentState = require('../models/EquipmentState');

const getAllEquipmentState = async(req, res) => {
    try {
        const equipmentState = await EquipmentState.find();
        res.send(equipmentState);

    } catch (error) {
        console.log(error)
        res.status(500).send('Ocurrio un error al intentar consultar los estados de equipos.')
    }
}

const getEquipmentStateById = async(req, res) => {
    try {
        const equipmentState = await EquipmentState.findById(req.params.equipmentStateId);
        if(!equipmentState){
            return res.status(404).send('El estado no existe');
        }
        res.send(equipmentState)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar el estado');
    }
}

const createdEquipmentState = async(req, res) => {
    try {

        let equipmentState = new EquipmentState();

        equipmentState.name = req.body.name;
        equipmentState.state = req.body.state;
        equipmentState.createDate = new Date();
        equipmentState.updateDate = new Date();

        equipmentState = await equipmentState.save();
        res.send(equipmentState)
    } catch (error) {
        console.log(error)
        res.status(500).send('Ocurrio un error al intentar crear un estado de equipo.')
    }
}

const updatedEquipmentState = async(req, res) => {
    try {
        
        let equipmentState = await EquipmentState.findById(req.params.equipmentStateId);

        if(!equipmentState){
            return res.status(400).send('El estado no existe.')
        }

        equipmentState.name = req.body.name;
        equipmentState.state = req.body.state;
        equipmentState.updateDate = new Date();

        equipmentState = await equipmentState.save();
        res.send(equipmentState);

    } catch (error) {
        console.log(error)
        res.status(500).send('Ocurrio un error al intentar actualizar el estado del equipo.')
    }
}

module.exports = {
    getAllEquipmentState, 
    getEquipmentStateById,
    createdEquipmentState,
    updatedEquipmentState
}