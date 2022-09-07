const { Schema, model } = require('mongoose');

const schema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: Number,
        imgUrl: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = model('Room', schema);
