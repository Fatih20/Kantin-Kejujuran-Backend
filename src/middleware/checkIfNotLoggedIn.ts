import { NextFunction, Request, Response } from "express";

function checkIfNotLoggedIn (req : Request, res : Response, next : NextFunction) {
    if (!(res.locals.user === undefined || res.locals.user === null)) {
        return res.status(401).send({message : "You're already logged in"})
    }
    next();
}

export default checkIfNotLoggedIn;