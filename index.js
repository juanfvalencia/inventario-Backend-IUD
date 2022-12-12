const express = require('express');
const {getConnection} = require('./db/db-connection-mongo');
const cors = require('cors');

const app = express();

app.use(cors());

getConnection();

app.use(express.json());

app.use('/user', require('./routes/user'));
app.use('/mark', require('./routes/mark'));
app.use('/equipment-type', require('./routes/equipmentType'));
app.use('/equipment-state', require('./routes/equipmentState'));
app.use('/inventory', require('./routes/inventory'));

// MODULO DE AUTENTICACIÓN Y AUTORIZACIÓN
app.use('/auth', require('./routes/auth'))

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
});