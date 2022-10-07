const Inventory = require('../models/Inventory');

const getAllInventory  = async(req, res) => {
    try {
        const inventory = await Inventory.find().populate([
            {
                path: 'user', select: 'name email state'
            },
            {
                path: 'mark', select: 'name state'
            },
            {
                path: 'equipmentType', select: 'name state'
            },
            {
                path: 'equipmentState', select: 'name state'
            }
        ]);
        res.send(inventory);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar inventarios.');
    }
}

const getInventoryById = async(req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.inventoryId);
        if(!inventory){
            return res.status(404).send('Inventario no existe');
        }
        res.send(inventory)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar el inventario');
    }
}

const createdInventory = async(req, res) => {
    try {

        const serialExist = await Inventory.findOne({ serial: req.body.serial})
        if(serialExist){
            return res.status(400).send('El serial ya existe.');
        }

        let inventory = new Inventory();

        inventory.serial = req.body.serial;
        inventory.model = req.body.model;
        inventory.description = req.body.description;
        inventory.color = req.body.color;
        inventory.photo = req.body.photo;
        inventory.buyDate = req.body.buyDate;
        inventory.price = req.body.price;
        inventory.user = req.body.user._id;
        inventory.mark = req.body.mark._id;
        inventory.equipmentType = req.body.equipmentType._id;
        inventory.equipmentState = req.body.equipmentState._id;
        inventory.createDate = new Date();
        inventory.updateDate = new Date();

        inventory = await inventory.save();
        res.send(inventory);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al crear el inventario.');
    }
}
const updatedInventory = async(req, res) => {
    try {

        let inventory = await Inventory.findById(req.params.inventoryId);
        if(!inventory){
            return res.send('El inventario no existe.');
        }

        const existInventoryforSerial = await Inventory
                            .findOne( {serial: req.body.serial, _id: { $ne: inventory._id }} );
        
        if(existInventoryforSerial){
            return res.status(400).send('Ya existe el serial para otro inventario.')
        }

        inventory.serial = req.body.serial;
        inventory.model = req.body.model;
        inventory.description = req.body.description;
        inventory.photo = req.body.photo;
        inventory.color = req.body.color;
        inventory.buyDate = req.body.buyDate;
        inventory.price = req.body.price;
        inventory.user = req.body.user;
        inventory.mark = req.body.mark._id;
        inventory.equipmentType = req.body.equipmentType._id;
        inventory.equipmentState = req.body.equipmentState._id;
        inventory.updateDate = new Date();

        inventory = await inventory.save();
        res.send(inventory);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al intentar actualizar el inventario.')
    }
}

module.exports = {
    getAllInventory,
    getInventoryById,
    createdInventory,
    updatedInventory
}