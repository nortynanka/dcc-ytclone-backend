const Joi = require("joi");

function validateReply(reply) {
    const schema = Joi.object({
        text: Joi.string().min(2).max(50).required(),
    });
    return schema.validate(reply);
}

exports.validateReply = validateReply;