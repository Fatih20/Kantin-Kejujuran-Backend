import { Request, response, Response } from "express";
import createAndSaveJWT from "../utilities/createAndSaveJWT";
import { UserOpaque } from "../utilities/types";
import { loginQuery, registerQuery } from "../utilities/userDataQuery";

export async function login (req : Request, res : Response) {
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

    createAndSaveJWT({student_id, password : undefined} as UserOpaque, res);
    return res.status(200).send({message : "Succesfully logged in", error : null, response});
}   

export async function register (req : Request, res : Response) {
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

export async function returnIfLoggedIn (req : Request, res : Response) {
    res.status(200).send({error : null, response : {...(res.locals.user), password : undefined}, message : "You are still logged in"})
}