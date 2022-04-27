// Imports
const mongoose = require("mongoose");
const Joi = require("joi");
const { replySchema } = require("./reply");

// Schema
const commentSchema = new mongoose.Schema({
    videoID: { type: String, required: true },
    text: { type: String, required: true, minlength: 2, maxlength: 50 },
    date: { type: Date, default: Date.now() }, // Optional Relative Date (countdown from today)
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    replies: [{ type: replySchema }],
});

// Model
const Comment = mongoose.model("Comment", commentSchema);

// Validation
function validateComment(comment) {
    const schema = Joi.object({
        videoID: Joi.string().required(),
        text: Joi.string().min(2).max(50).required(),
        replies: Joi.array(),
    });
    return schema.validate(comment);
}

// Exports
exports.commentSchema = commentSchema;
exports.Comment = Comment;
exports.validateComment = validateComment;
