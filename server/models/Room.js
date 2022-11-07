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
        description: {
            content: {
                type: String,
                required: true,
            },
            icons: {
                path: {
                    type: Array,
                    required: true,
                },
                name: {
                    type: Array,
                    required: true,
                },
            },
        },
    },
    {
        timestamps: true,
    },
);

module.exports = model('Room', schema);
