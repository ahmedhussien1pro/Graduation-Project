import {PrismaClient} from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASSWORD,
    },
});

// 2. Send the authentication email
export async function sendVerificationEmail(toEmail: string, verificationNum: string): Promise<void> {

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: toEmail,
        subject: 'Your verification Number',
        text: `Your verification number is: ${verificationNum}`,
    };
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error(error.message);
    }
}

// 3. Validate the auth number from the database
export async function validateVerificationNumber(email: string, userInput: number): Promise<{
    valid: boolean,
    message: string
}> {
    try {
        // Find the user by email
        const user = await prisma.user.findUnique({
            where: {email},
            include: {validationNumber: true},
        });

        if (!user || !user.validationNumber) {
            return {valid: false, message: "No verification number found for this email."};
        }

        const {validationNumber} = user;
        // Check if the auth number has expired
        if (Date.now() > Number(validationNumber.expiration)) {
            await prisma.validationNumber.delete({
                where: {userId: user.id},
            });
            return {valid: false, message: "verification number has expired."};
        }

        // Check if the number matches
        if (validationNumber.number === userInput.toString()) {      // Mark the number as verified
            await prisma.validationNumber.update({
                where: {userId: user.id},
                data: {isVerified: true},
            });
            await prisma.user.update({
                where: {id: user.id},
                data: {isVerified: true},
            });
            return {valid: true, message: "verification successful."};
        }
        return {valid: false, message: "Invalid verification number."};
    } catch (error) {
        console.error('Error validating verification number:', error);
        return {valid: false, message: "Error validating verification number."};
    }
}
