import { UserOpaque } from "./types";
import serverConfig from "./config";
import jwt from 'jsonwebtoken';
import { Response } from "express";

function createAndSaveJWT(user : UserOpaque, res : Response) {
    const keyGeneratingJWT = serverConfig.jwt.keyGeneratingJWT;
    const issuer = serverConfig.jwt.issuer;
    const expires = new Date(serverConfig.jwt.expireTime);
    const token = jwt.sign(user, keyGeneratingJWT, {algorithm : "HS256",expiresIn : "1d", issuer:issuer});
    res.cookie("token", token, {httpOnly : true, secure : true, sameSite : "none"});
}

export default createAndSaveJWT;