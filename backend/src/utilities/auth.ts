import jwt, {JwtPayload} from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {NextFunction, Request, Response} from "express";
import {User} from "@prisma/client";

export const hashPassword = async (password: string) => {
    return bcrypt.hash(password, 5);
}

export const comparePasswords = async (password: string, hash: string) => {
    return bcrypt.compare(password, hash)
}

export const createJWT = (user: User) => {
    return jwt.sign({id: user.id}, process.env.JWT_SECRET);
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
const bearer = req.headers.authorization;   //authorization not authentication
    if (!bearer)
        {
            return res.status(401).json({message:'not authorized'});
        }

    const[ ,token]=bearer.split(' ');
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        req.params.id = user.id;
        next();
    } catch (e) {
        console.error(e);
        return res.status(401).json({ message: 'Invalid token' });
    }
}