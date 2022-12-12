const UserSystem = require('../models/User');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Registra un usuario
const register = async(req, res) => {
    const {email, password } = req.body;
    try {
        const userSystemBD = await UserSystem.findOne({
            email
        })
        console.log(userSystemBD);
        if(userSystemBD){
            return res.status(400).json({
                msg: 'Ya existe este usuario'
            })
        }
        const userSystem = new UserSystem(req.body);
        const salt = await bcryptjs.genSalt();
        const passwordEnc = await bcryptjs.hashSync(password, salt)
        console.log(passwordEnc);   
        userSystem.password = passwordEnc
        const userSystemSaved = await userSystem.save();

        return res.status(201).json(userSystemSaved)

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: error
        })
    }
}

// Login del usuario
const login = async(req, res) => {
    const {email, password } = req.body;
    try {
        const userSystem = await UserSystem.findOne({
            email
        })
        console.log(userSystem);
        if(!userSystem){
            return res.status(404).json({
                msg: 'No existe este usuario'
            })
        }
        if(!userSystem.state){
            return res.status(401).json({
                msg: 'Usuario Inactivo'
            })
        }
        const isPassword = bcryptjs.compareSync(password, userSystem.password)
        if(!isPassword){
            return res.status(401).json({
                msg: 'Credenciales Incorrectas'
            }) 
        }
        const payload = {
            user: userSystem.email,
            name: userSystem.name,
            rol: userSystem.rol
        }
        const token = await jwt.sign(
            payload,
            process.env.SECRET_KEY, {
                expiresIn: '1h'
            }
        );
        return res.json({
            userSystem,
            token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: error
        })
    }
}

module.exports = {
    register,
    login
}