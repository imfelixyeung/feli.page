import Joi from "joi";

const contactSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required(),
});

export default contactSchema;
