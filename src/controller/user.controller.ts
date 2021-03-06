import { Request, RequestHandler, response, Response } from "express";
import serverConfig from "../utilities/config";
import createAndSaveJWT from "../utilities/createAndSaveJWT";
import { UserOpaque } from "../utilities/types";
import { deleteQuery, loginQuery, registerQuery } from "../utilities/userDataQuery";

export const logout : RequestHandler = async (req : Request, res : Response) => {
    return res.clearCookie('token', serverConfig.cookieSettings).send({message : "Logout successful"});
}

export const login : RequestHandler =  async  (req : Request, res : Response) => {
    const {student_id, password} = req.body;
    const {error, response, errorManMade, position } = await loginQuery(student_id, password);

    if (error !== null || response === undefined) {
        if (errorManMade === "wrongPassword") {
            res.status(400).send({error, message : "Error because the password is incorrect"})
        } else if (errorManMade === "notRegistered") {
            res.status(400).send({error, message : "Error because the student aren't registered yet"})
        } else {
            if (position === "Checking uniqueness") {
                res.status(500).send({error, message : "Error when checking if user is in the database", response})
            } else if (position === "Getting new password") {
                res.status(500).send({error, message : "Error when inserting new user into the database", response})
            } else {
                res.status(500).send({error, message : "Error when done", response})
            }
        }
        return;
    }

    const {error : errorSigningJWT, response : responseSigningJWT} = createAndSaveJWT({student_id, password : undefined} as UserOpaque, res);
    if (error !== null || responseSigningJWT === undefined) {
        return res.status(500).send({message : "Failed when signing JWT", errorSigningJWT});
    }
    
    return res.status(200).send({message : "Succesfully logged in", error : null, response});
}   

export const register : RequestHandler =  async  (req : Request, res : Response) => {
    const {student_id, password} = req.body
    
    const {error, response, position, errorManMade } = await registerQuery(student_id, password);

    if (error !== null || response === undefined) {
        if (errorManMade === "registeredAlready") {
            return res.status(400).send({error, message : "User is already registered", response})
        } else {
            if (position === "Checking uniqueness") {
                res.status(500).send({error, message : "Error when checking if user is in the database", response})
            } else if (position === "Inserting new user"){
                res.status(500).send({error, message : "Error when inserting new user into the database", response})
            }
        }

        return;

    }

    createAndSaveJWT({student_id, password : undefined} as UserOpaque, res);
    return res.status(200).send({message : "Succesfully registered new user", error : null, response})
} 

export const deleteAccount : RequestHandler = async (req : Request, res : Response) => {
    const {student_id} = res.locals.user;
    const {error, response } = await deleteQuery(student_id);
    if (error !== null || response === undefined) {
        res.status(500).send({message : "Failed when deleting the user", error, response})
        return;
    }

    res.clearCookie('token', serverConfig.cookieSettings)
    res.status(200).send({message : "Successfully deleted the user", error, response})
} 

export async function returnIfLoggedIn (req : Request, res : Response) {
    res.status(200).send({error : null, response : {...(res.locals.user), password : undefined}, message : "You are still logged in"})
}