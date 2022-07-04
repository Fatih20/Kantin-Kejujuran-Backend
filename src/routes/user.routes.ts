import express from "express";
import { login, register, returnUserInfo } from "../controller/user.controller";

const userRouter = express.Router();

userRouter.use("/me", returnUserInfo);
userRouter.use("/login", login);
userRouter.use("/register", register);



export default userRouter;