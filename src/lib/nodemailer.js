import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    secure: false,
    secureConnection: false,
    tls: {
        ciphers: "SSLv3",
    },
    requireTLS: true,
    port: 587,
    debug: true,
    connectionTimeout: 10000,
    auth: {
        user: 'apptexit@apptexit.com',
        pass: 'tkEfNC4MmURKxGvY'
    }
})

export const mailOptions = {
    from: 'apptexit@apptexit.com',
    to: 'admin@apptexit.com',
}