import {Router} from "express";
import RegistrationController from "./register.controller";

const registerRouter = Router();

const registrationController = new RegistrationController();

registerRouter.post("/register", registrationController.initiateRegistration);

registerRouter.post("/authenticate", registrationController.completeRegistration);

export {registrationController};
export default registerRouter;
