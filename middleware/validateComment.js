const Joi = require("joi");

function validateComment(comment) {
  const schema = Joi.object({
    videoID: Joi.string().required(),
    text: Joi.string().min(2).max(50).required(),
    replies: Joi.array(),
  });
  return schema.validate(comment);
}

exports.validateComment = validateComment;
