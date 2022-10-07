const { Schema, model } = require('mongoose');

const EquipmentTypeSchema = Schema({

    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        enum: [
            'Active',
            'Inactive'
        ]
    },
    createDate: {
        type: Date,
        required: true
    },
    updateDate: {
        type: Date,
        required: true
    }
});

module.exports = model('EquipmentType', EquipmentTypeSchema)