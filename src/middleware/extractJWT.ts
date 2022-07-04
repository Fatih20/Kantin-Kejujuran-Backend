

import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import serverConfig  from '../utilities/config';

async function extractJWT(req : Request, res : Response, next : NextFunction) {
    const keyGeneratingJWT = serverConfig.jwt.keyGeneratingJWT;
    console.log(req.cookies);
    if (req.cookies.token){
        const token = req.cookies.token as string;
        jwt.verify(token, keyGeneratingJWT, (error, user) => {
            if (!error) {
                res.locals.user = user;
            } else {
                console.log(error);
            }
        })
        next();
        return;
    }
    next();
}

export default extractJWT;