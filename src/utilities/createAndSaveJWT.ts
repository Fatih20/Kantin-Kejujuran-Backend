import { UserOpaque } from "./types";
import serverConfig from "./config";
import jwt from 'jsonwebtoken';
import { Response } from "express";

function createAndSaveJWT(user : UserOpaque, res : Response) {
    const keyGeneratingJWT = serverConfig.jwt.keyGeneratingJWT;
    const issuer = serverConfig.jwt.issuer;
    const expires = new Date(Date.now() + serverConfig.jwt.expireTime);
    try {
        const token = jwt.sign(user, keyGeneratingJWT, {algorithm : "HS256",expiresIn : "1d", issuer});
        res.cookie("token", token, serverConfig.cookieSettings);
        return {error : null, response : "Token signed"}
    } catch (error) {
        return {error, response : undefined}
    }
}

export default createAndSaveJWT;