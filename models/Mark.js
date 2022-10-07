const { Schema, model } = require('mongoose');

const MarkSchema = Schema({
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

module.exports = model('Mark', MarkSchema)