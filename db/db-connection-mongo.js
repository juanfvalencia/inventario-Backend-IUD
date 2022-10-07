require('dotenv').config();
const mongoose = require('mongoose');


const getConnection = async () => {

    try {   
        
        await mongoose.connect( process.env.MONGODB_CNX);    
        console.log('conexión exitosa');

    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    getConnection
}