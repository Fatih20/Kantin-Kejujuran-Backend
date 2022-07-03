import { ISoldItemRaw } from "./types";

export function numerizePriceAndMiliseconds (item : any) {
    const {name, price, datecreated, description, id, imagelink, milisecondcreated} = item;
    return {
        name,
        price : parseInt(price),
        datecreated,
        description,
        id,
        imagelink,
        milisecondcreated : parseInt(milisecondcreated)
    } as ISoldItemRaw;
}