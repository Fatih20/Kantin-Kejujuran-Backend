import { Response, Request } from "express";
import { addItemQuery, buyItemQuery, getAllItemsQuery, getBalanceQuery } from "../utilities/storeDataQuery";
import { ISoldItem, ISoldItemRaw } from "../utilities/types";

export async function getAllItems (req : Request, res : Response) {
    const {response, error} = await getAllItemsQuery();

    if (error !== null || response === undefined) {
        res.status(500).send({error, message : "Error when getting data from the database", response});
        return;
    }

    return res.status(200).send({error, message : "Succesfully fetched data", response : response.rows as ISoldItemRaw[]});

}

export async function addItem (req : Request, res : Response) {
    const {response, error } = await addItemQuery(req.body.addedItem as ISoldItem);

    if (error !== null || response === undefined) {
        res.status(500).send({error, message : "Error when adding data to the database", response});
        return;
    }

    return res.status(200).send({error, message : "Succesfully added data", response : response});
}

export async function buyItem (req : Request, res : Response) {
    const {response, error } = await buyItemQuery(req.body.boughtItem as ISoldItemRaw);

    if (error !== null || response === undefined) {
        res.status(500).send({error, message : "Error when updating data to the database", response});
        return;
    }

    return res.status(200).send({error, message : "Succesfully updated data", response : response});
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

