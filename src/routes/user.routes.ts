import express from "express";
import { deleteAccount, login, logout, register, returnIfLoggedIn } from "../controller/user.controller";
import checkIfLoggedIn from "../middleware/checkIfLoggedIn";
import checkIfNotLoggedIn from "../middleware/checkIfNotLoggedIn";

const userRouter = express.Router();

userRouter.get("/me", checkIfLoggedIn, returnIfLoggedIn);
userRouter.post("/login", checkIfNotLoggedIn, login);
userRouter.post("/register", checkIfNotLoggedIn, register);
userRouter.post("/logout", checkIfLoggedIn, logout);
userRouter.delete("/delete", checkIfLoggedIn, deleteAccount);




export default userRouter;