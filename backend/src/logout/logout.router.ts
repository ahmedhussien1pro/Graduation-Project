import {Router} from "express";
import {logoutUser} from "./logout.controller";
import {isAuthenticated} from "../utilities/auth";

let logoutRouter = Router();

logoutRouter.post("/logout", isAuthenticated,logoutUser);

export default logoutRouter