const mongoose = require('mongoose');

const messageModel = mongoose.Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        content: { type: String, trim: true },
        chat: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    }, {
    timestamps: true,
}
);

const Message = Mongoose.Model("Message", messageModel);

module.exports = Message;