import { Router } from "express";
import { loginController } from "./login.controller";

let loginRouter = Router();

loginRouter.post("/login", loginController);

export default loginRouter;
