import pool from "../database/db";

const storeQuery = {
    getAllItems : "SELECT * FROM sold_items",
    getBalance : "SELECT current_balance FROM balance WHERE id = 1;",
}

export async function getAllItemsQuery () {
    let response = undefined;
    try {
        response = await pool.query(storeQuery.getAllItems);
    } catch (error){
        return {response, error};
    }

    return {error : null, response};
}

export async function getBalanceQuery () {
    let response = undefined;
    try {
        response = await pool.query(storeQuery.getBalance);
    } catch (error){
        return {response, error};
    }

    return {error : null, response};
}