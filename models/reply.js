// Imports
const mongoose = require("mongoose");

// Schema
const replySchema = new mongoose.Schema({
    text: { type: String, required: true, minlength: 2, maxlength: 50 },
    date: { type: Date, default: Date.now() }, // Optional Relative Date (countdown from today)
});

// Model
const Reply = mongoose.model("Reply", replySchema);

// Exports
exports.replySchema = replySchema;
exports.Reply = Reply;
