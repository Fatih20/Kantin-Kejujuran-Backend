import pool from "../database/db";
import { ISoldItem } from "./types";

const storeQuery = {
    getAllItems : "SELECT * FROM sold_items",
    getBalance : "SELECT current_balance FROM balance WHERE id = 1;",
    addItem : "INSERT INTO sold_items (name, price, image, description, datecreated, milisecondscreated)"
}

export async function getAllItemsQuery () {
    try {
        const response = await pool.query(storeQuery.getAllItems);
        return {error : null, response};
    } catch (error){
        return {response : undefined, error};
    }
}

export async function getBalanceQuery () {
    try {
        const response = await pool.query(storeQuery.getBalance);
        return {error : null, response};
    } catch (error){
        return {response : undefined, error};
    }
}

export async function addItemQuery (addedItem : ISoldItem) {
    console.log(addedItem);
    const {dateCreated, price, milisecondCreated, description, name, imageLink} = addedItem;
    try {
        const response = await pool.query(`${storeQuery.addItem} VALUES ('${name}', ${price}, '${imageLink}', '${description}', '${dateCreated}', ${milisecondCreated})`);
        return {error : null, response}
    } catch (error){
        return {response : undefined, error};
    }
}