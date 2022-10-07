const User = require('../models/User')

const getAllUser = async (req, res) => {
    
    try {
        const user = await User.find();
        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al tratar de consultar los usuarios.');  
    }
}

const getUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if(!user){
            return res.status(404).send('El usuario no existe');
        }
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar el usuario');
    }
}

const createdUser = async (req, res) => {

    try {
        
        const userExist = await User.findOne({ email: req.body.email });
        if(userExist){
            return res.status(400).send('El correo ya existe.')
        }

        let user = new User();
    
        user.name = req.body.name;
        user.email = req.body.email;
        user.state = req.body.state;
        user.createDate = new Date();
        user.updateDate = new Date();
    
        user = await user.save();
        res.send(user)   

    } catch (error) {
        console.log(error)
        res.status(500).send('Ocurrio un error al tratar de crear un nuevo usuario.')
    }   
}

const updatedUser = async (req, res) => {
    
    try {
               
        let user = await User.findById(req.params.userId);

        if(!user) {
            return res.status(400).send('El usuario no existe.')
        }

        const userExist = await User
                    .findOne({ email: req.body.email, _id: { $ne: user._id } });

        if(userExist){
            return res.status(400).send('El email ya existe.')
        }
    
        user.name = req.body.name;
        user.email = req.body.email;
        user.state = req.body.state;
        user.updateDate = new Date();
    
        user = await user.save();
        res.send(user)

    } catch (error) {
        console.log(error)
        res.status(500).send('Ocurrio un error al tratar de actualizar el usuario.')
    }
}

module.exports = {
    getAllUser,
    getUserById,
    createdUser,
    updatedUser,
}