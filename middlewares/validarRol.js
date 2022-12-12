const isAdmin = async (req, res, next) => {
    console.log(req.user);
    const { rol } = req.user
    if(!req.user)
        return res.status(500).json({
            msg: 'Token invalido'
    })
    if(rol !== 'ADMIN'){
        return res.status(403).json({
            msg: 'No permitido'
        })
    }
    next()
}

module.exports = isAdmin
