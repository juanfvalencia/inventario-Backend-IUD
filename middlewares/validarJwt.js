const jwt = require('jsonwebtoken')

const validarJwt = async (req, res, next) => {
    const token = req.header('access-token')
    console.log(token);
    if(!token){
        return res.status(400).json({
            msg: 'No hay token'
        }) 
    }
    try {
        const payload = jwt.verify(token, process.env.SECRET_KEY)
        req.user = payload
        next()
    } catch (error) {
        return res.status(400).json({
            msg: 'Token invalido'
        }) 
    }
}

module.exports = validarJwt