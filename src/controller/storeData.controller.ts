import { Response, Request } from "express";
import { getAllItemsQuery, getBalanceQuery } from "../utilities/storeDataQuery";

export async function getAllItems (req : Request, res : Response) {
    const {response, error} = await getAllItemsQuery();

    if (error !== null || response === undefined) {
        res.status(500).send({error, message : "Error when getting data from the database", response});
        return;
    }

    return res.status(200).send({error, message : "Succesfully fetched data", response : response.rows});

}

export async function addItem (req : Request, res : Response) {
    
}

export async function buyItem (req : Request, res : Response) {

}

export async function getBalance (req : Request, res : Response) {
    const {response, error} = await getBalanceQuery();

    if (error !== null || response === undefined) {
        res.status(500).send({error, message : "Error when getting data from the database", response});
        return;
    }

    res.status(200).send({error, message : "Succesfully fetched the data", response : response.rows[0].current_balance})
}

export async function incrementBalance (req : Request, res : Response) {

}

