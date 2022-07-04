import pool from "../database/db";
import { ISoldItem, ISoldItemRaw } from "./types";

const storeQuery = {
    getAllItems : "SELECT * FROM sold_items",
    getBalance : "SELECT current_balance FROM balance WHERE id = 1;",
    addItem : "INSERT INTO sold_items (name, price, imagelink, description, datecreated, milisecondcreated)",
    buyItem : "DELETE FROM sold_items WHERE id =",
    incrementBalance : (newBalance : number) => `UPDATE balance SET current_balance = ${newBalance} WHERE id=1;`
}

export async function getAllItemsQuery () {
    try {
        const response = await pool.query(storeQuery.getAllItems);
        // console.log(response);
        return {error : null, response};
    } catch (error){
        return {response : undefined, error};
    }
}

export async function getBalanceQuery () {
    try {
        const response = await pool.query(storeQuery.getBalance);
        return {error : null, response : response.rows[0].current_balance};
    } catch (error){
        return {response : undefined, error};
    }
}

export async function addItemQuery (addedItem : ISoldItem) {
    const {datecreated, price, milisecondcreated, description, name, imagelink} = addedItem;
    try {
        const response = await pool.query(`${storeQuery.addItem} VALUES ('${name}', ${price}, '${imagelink}', '${description}', '${datecreated}', ${milisecondcreated})`);
        return {error : null, response}
    } catch (error){
        return {response : undefined, error};
    }
}

export async function buyItemQuery (boughtItem : ISoldItemRaw) {
    const {id} = boughtItem;
    try {
        const response = await pool.query(`${storeQuery.buyItem} ${id};`)
        return {error : null, response}
    } catch (error){
        return {response : undefined, error};
    }
}

export async function incrementBalanceQuery (previousBalance : number, increment : number) {
    try {
        const response = await pool.query(storeQuery.incrementBalance(previousBalance + increment))
        return {error : null, response}
    } catch (error){
        return {response : undefined, error};
    }

}
