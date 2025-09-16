import { Request, Response } from 'express';
import prisma from "../utilities/db";
import jwt from 'jsonwebtoken';

export async function logoutUser(req: Request, res: Response): Promise<Response> {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(400).json({ error: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string };

        await prisma.user.update({
            where: { id: decoded.id },
            data: {
                token: null,
            },
        });

        res.clearCookie('token');
        return res.status(200).json({ message: "Logged out successfully" });

    } catch (error) {
        console.error('Error logging out user:', error);
        return res.status(500).json({ error: "Server error during logout" });
    }
}
