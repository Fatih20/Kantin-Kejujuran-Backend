import { NextFunction, Request, Response } from "express";

function checkIfLoggedIn (req : Request, res : Response, next : NextFunction) {
    if (res.locals.user === undefined || res.locals.user === null) {
        return res.status(401).send({error : "notLoggedIn",message : "You're not logged in"})
    }
    next();
}

export default checkIfLoggedIn;