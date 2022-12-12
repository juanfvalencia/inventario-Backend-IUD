const { Schema, model } = require('mongoose');

const userSchema = (add) => {
    const schema = Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        state: {
            type: String,
            enum: [
                'Active',
                'Inactive'
            ] 
        },
        createDate: {
            type: Date,
            default: new Date()
        },
        updateDate: {
            type: Date,
            default: new Date()
        }
    });
    
    if(add){
        schema.add(add)
    }
    return schema;
}

const UserSchema = userSchema()

const UserSystemSchema = userSchema({
    password: {
        type: String,
        required: [true, 'Password requerido']
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN', 'DOCENTE']
    }
})

module.exports = model('User', UserSchema)
module.exports = model('UserSystem', UserSystemSchema)