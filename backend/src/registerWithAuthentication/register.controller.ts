import prisma from "../utilities/db";
import {createJWT, hashPassword} from "../utilities/auth";
import {Request, Response} from "express";
import {sendVerificationEmail, validateVerificationNumber} from "./authenticator.service";
import crypto from "crypto";

class RegistrationController {
    public email: string;
    public name: string;
    public password: string;

    constructor() {
        this.email = '';
        this.name = '';
        this.password = '';

        this.initiateRegistration = this.initiateRegistration.bind(this);
        this.completeRegistration = this.completeRegistration.bind(this);
    }

    // Step 1: Initial registration
    public async initiateRegistration(req: Request, res: Response): Promise<Response> {
        try {
            const {email, name, password} = req.body;
            // Check if email already exists
            const existingEmail = await prisma.user.findUnique({
                where: {email},
            });

            if (existingEmail && existingEmail.isVerified) {
                return res.status(409).json({data: "Email already exists"});
            }

            const existingName = await prisma.user.findUnique({
                where: {name}
            });

            if (existingName&& existingName.isVerified) {
                console.log("Name already exists");
                return res.status(409).json({data: "Name already exists"});
            }

            if (existingEmail && !existingEmail.isVerified) {
                await prisma.validationNumber.deleteMany({
                    where: {userId: existingEmail.id}
                });

            // Delete the existing user
            await prisma.user.delete({
                where: {email},
            });
        }


            this.email = email;
            this.name = name;
            this.password = password;
            const hashedPassword = await hashPassword(this.password);
            const number = crypto.randomInt(100000, 999999);
            const expiry = Date.now() + 10 * 60 * 1000; // 10 minutes from now

            const tempUser = await prisma.user.create({
                data: {
                    email: this.email,
                    name: this.name,
                    password: hashedPassword,
                    isVerified: false,
                    validationNumber: {
                        create: {
                            number: number.toString(),
                            expiration: BigInt(expiry),
                            isVerified: false,
                        }
                    }
                }
            });

            // Send the verification email with the user ID
            await sendVerificationEmail(this.email, number.toString());

            return res.status(201).json({
                msg: "temp user created successfully. Please verify your email",
                data: {
                    email: tempUser.email,
                    name: tempUser.name,
                }
            });
        } catch (error) {
            console.error('Error initiating registration:', error);
            return res.status(500).json({data: "Error initiating registration"});
        }
    }

    // Step 2: Complete registration
    public async completeRegistration(req: Request, res: Response): Promise<Response> {
        const {number} = req.body;
        const email: string = this.email;

        try {
            const validationResponse = await validateVerificationNumber(email, number);

            if (!validationResponse.valid) {
                console.log("Validation response:", validationResponse);
                return res.status(400).json({data: validationResponse.message});
            }
            // Update the user to mark them as verified
            const user = await prisma.user.update({
                where: {email},
                data: {
                    isVerified: true,
                }
            });

            const token: string = createJWT(user);
            await prisma.user.update({
                where: {email},
                data: {
                    token: token,
                },
            });

            res.cookie('token', token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000 // 24 hours
            });

            return res.status(200).json({
                token: token,
                msg: "Email verified successfully",
                data: null,
            });
        } catch (error) {
            console.error('Error completing registration:', error);
            return res.status(500).json({data: "Error completing registration"});
        }
    }
}

export default RegistrationController;
