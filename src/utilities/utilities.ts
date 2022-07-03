import { ISoldItemRaw, ISoldItemRawString } from "./types";

export function numerizer (stringItem : ISoldItemRawString) {
    console.log(stringItem)
    const {name, price, datecreated, description, id, imagelink, milisecondcreated} = stringItem;
    return {
        name,
        price : parseInt(price),
        datecreated,
        description,
        id : parseInt(id),
        imagelink,
        milisecondcreated : parseInt(milisecondcreated)
    } as ISoldItemRaw;
}