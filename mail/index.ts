import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const credentialsJson = process.env.NOREPLY_FELI_PAGE_EMAIL_CREDENTIALS;
const credentials = JSON.parse(credentialsJson);

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: credentials,
});

interface IMakeOptions {
    to: string;
    subject: string;
    text: string;
    sender: string;
}

const makeOptions = ({
    to,
    subject,
    text,
    sender,
}: IMakeOptions): Mail.Options => ({
    from: "Feli Page <noreply@feli.page>",
    to,
    subject,
    text,
    replyTo: sender,
    sender,
});

interface ISendEmail {
    sender: string;
    subject: string;
    text: string;
}

const sendEmail = async ({ sender, subject, text }: ISendEmail) => {
    const options = makeOptions({
        sender,
        subject,
        text,
        to: "contact@feli.page",
    });
    await transporter.sendMail(options);
};

export default sendEmail;
