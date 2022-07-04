import express from "express";
import { login, register, returnIfLoggedIn } from "../controller/user.controller";
import checkIfLoggedIn from "../middleware/checkIfLoggedIn";
import checkIfNotLoggedIn from "../middleware/checkIfNotLoggedIn";

const userRouter = express.Router();

userRouter.get("/me", checkIfLoggedIn, returnIfLoggedIn);
userRouter.get("/login", checkIfNotLoggedIn, login);
userRouter.post("/register", checkIfNotLoggedIn, register);



export default userRouter;