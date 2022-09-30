import { Router } from "express";

import UserController from "../modules/user/user_controller";

const userRoutes = Router();

const userController: UserController = new UserController();

userRoutes.get("/", userController.handle);

export default userRoutes;
