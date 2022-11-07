const { Schema, model } = require('mongoose');

const schema = new Schema(
    {
        content: { type: String, required: true },
        // кто создал отзыв:
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    },
    {
        timestamps: true,
    },
);

module.exports = model('Review', schema);
