import prisma from "../utilities/db";
import {comparePasswords, createJWT} from "../utilities/auth";
import {Request, Response} from "express";

export const loginController = async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email
        },
    });
    if (!user) {
        return res.status(404).send("Not a user");
    }

    const isValid: boolean = await comparePasswords(req.body.password, user.password);

    if (!isValid) {
        return res.status(401).send("Invalid name or password");
    }
    if (!user.isVerified){
        return res.status(401).send("User not verified");
    }

    const token: string = createJWT(user);

    await prisma.user.update({
        where: {id: user.id},
        data: {token: token}
    });


    return res.status(200).json({
        msg: "User logged in successfully",
        data: {
            token: token,
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
};
