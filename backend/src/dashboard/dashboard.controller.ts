import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import multer from 'multer';
import prisma from "../utilities/db";
import { hashPassword, comparePasswords } from "../utilities/auth";


export async function getAllUsers(req: Request, res: Response): Promise<Response> {
    const writers = await prisma.user.findMany({
        where: { role: 'writer' },
    });
    return res.status(200).json({
        data: writers
    });
}

export async function getUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: { id },
            select: { email: true, name: true, role: true, id: true },

        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({
            msg: "User found",
            data: { email: user.email, name: user.name, role: user.role }
        });

    } catch (error) {
        console.error('Error getting user:', error);
        return res.status(500).json({ error: " server error" });
    }
}

export async function createNewUser(req: Request, res: Response): Promise<Response> {
    const { email, name, role } = req.body;
    const hashedPassword = await hashPassword(req.body.password);
    try {
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                role,
                isVerified: true,
            }
        });
        return res.status(201).json({
            msg: "User created successfully",
            data: user
        });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ error: " server error" });
    }
}

export async function updateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { email, name, role } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { id },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        await prisma.user.update({
            where: { id },
            data: {
                email,
                name,
                role,
            },
        });

        const updatedUser = await prisma.user.findUnique({
            where: { id },
            select: { email: true, name: true, role: true, id: true },
        });


        return res.status(200).json({
            msg: "User updated successfully",
            data: updatedUser
        });


    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ error: " server error" });
    }
}

export async function deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: { id },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        await prisma.validationNumber.deleteMany({
            where: { userId: id },
        });

        await prisma.user.delete({
            where: { id },
        });
        return res.status(200).json({
            message: "User deleted successfully",
            data: null
        });

    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ error: " server error" });
    }
}

export async function getUserByToken(req: Request, res: Response): Promise<Response> {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from "Bearer <token>"

    if (!token) {
        return res.status(401).json({ error: "Authorization token is required" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string };
        const userId = decoded.id;

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                isVerified: true,
                createdAt: true,
                updatedAt: true,
                birthday: true,
                phoneNum: true,
                address: true,
                image: true
            },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({
            msg: "User found",
            data: user
        });

    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ error: "Invalid or expired token" });
    }
}

export async function addPersonalInfo(req: Request, res: Response): Promise<Response> {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from "Bearer <token>"

    if (!token) {
        return res.status(401).json({ error: "Authorization token is required" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string };
        const userId = decoded.id;

        // Check if the name already exists
        const existName = await prisma.user.findUnique({
            where: { name: req.body.name },
        });


        // Build the update data dynamically
        const updateData: any = {
            name: req.body.name,
            birthday: req.body.birthday,
            phoneNum: req.body.phoneNum,
            address: req.body.address,
        };

        if (req.body.imageId) {
            updateData.image = {
                connect: { id: req.body.imageId },
            };
        }

        // Update the user
        const user = await prisma.user.update({
            where: { id: userId },
            include: { image: true },
            data: updateData,
        });

        return res.status(200).json({
            msg: "User updated successfully",
            data: user,
        });
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ error: "Server error" });
    }
}


export async function resetPassword(req: Request, res: Response): Promise<Response> {
    const userId = req.params.id;
    try {

        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (!await comparePasswords(req.body.oldPassword, user.password)) {
            return res.status(400).json({ error: "Old password is incorrect" });
        }

        const hashedPassword = await hashPassword(req.body.newPassword);

        const newPassword = await prisma.user.update({
            where: { id: userId },
            data: {
                password: hashedPassword,
            },
        });
        return res.status(200).json({
            msg: "Password updated successfully",
            data: user
        });

    } catch
    (error) {
        console.error('Error getting user:', error);
        return res.status(500).json({ error: " server error" });
    }
}

export async function personalInfo(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: { id },
            select: { email: true, name: true, role: true, birthday: true, phoneNum: true, address: true },

        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({
            msg: "User found",
            data: {
                email: user.email,
                name: user.name,
                role: user.role,
                birthday: user.birthday,
                phoneNum: user.phoneNum,
                address: user.address
            }
        });

    } catch (error) {
        console.error('Error getting user:', error);
        return res.status(500).json({ error: " server error" });
    }
}


// for user photo
export const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/'); // Directory where files will be stored
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
        },
    }),
    fileFilter: (req, file, cb) => {
        // Check the file type
        const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true); // Accept the file
        } else {
            cb(new Error('Only image files are allowed!'), false); // Reject the file
        }
    },
});

// Save the file details to the database
export async function saveImage(req, res: Response, next) {
    const fs = require('fs').promises; // Use promises for asynchronous file operations

    try {
        const file = req.file; // File sent with the request
        const userId = req.params.id; // User ID from the request parameters

        if (!userId) {
            return res.status(400).json({ error: 'User ID is missing' });
        }

        if (!file) {
            return next(); // No image provided, proceed to the next middleware
        }

        // Check if the user already has an associated image
        const existingImage = await prisma.image.findFirst({
            where: { userId },
        });

        if (existingImage) {
            // Delete the existing image file from the file system
            try {
                await fs.unlink(existingImage.path);
                console.log(`Old image deleted: ${existingImage.path}`);
            } catch (err) {
                console.warn(`Failed to delete old image: ${existingImage.path}. Error: ${err.message}`);
            }

            // Remove the existing image record from the database
            await prisma.image.delete({
                where: { id: existingImage.id },
            });
        }

        // Save the new image in the database
        const savedFile = await prisma.image.create({
            data: {
                name: file.originalname,
                mimetype: file.mimetype,
                path: file.path,
                user: { connect: { id: userId } },
            },
        });

        // Attach the new image ID to the request body for further processing
        req.body.imageId = savedFile.id;

        // Proceed to the next middleware
        next();
    } catch (error) {
        console.error('Error handling image upload:', error);
        res.status(500).json({ error: error.message || 'Error uploading file.' });
    }
}

export async function contactUs(req: Request, res: Response): Promise<Response> {
    const { fname, lname, phone, email, message } = req.body;
    try {
        const contact = await prisma.contactUs.create({
            data: {
                fname,
                lname,
                phone,
                email,
                message
            }
        });
        return res.status(201).json({
            msg: "Message sent successfully. We will contact you soon.",
            data: contact
        });
    } catch (error) {
        console.error('Error sending message:', error);
        return res.status(500).json({ error: " server error" });
    }
}
