import { APIError, onError, onNoMatch } from "./_handlers";
import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "mail";
import contactSchema from "schema/contact";

const handler = nextConnect<NextApiRequest, NextApiResponse>({
    onNoMatch,
    onError,
}).post(async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const validated = await contactSchema.validateAsync({
            name,
            email,
            message,
        });
        await sendEmail({
            sender: validated.email,
            subject: `Message from ${validated.name}`,
            text: validated.message,
        });
        res.send({
            success: true,
            message: "Success",
        });
    } catch (error) {
        console.log(error);
        throw new APIError({
            status: 400,
            message: error,
        });
    }
});

export default handler;
