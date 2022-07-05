import { ISoldItemRaw, ISoldItemRawString } from "./types";

export function numerizer (stringItem : ISoldItemRawString) {
    // console.log(stringItem)
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

export function escapeQuotes (string : string | number) {

    if (typeof string === "number") {
        return string as number;
    }
    return string.replace(/\\/g, '\\\\').
        replace(/\u0008/g, '\\b').
        replace(/\t/g, '\\t').
        replace(/\n/g, '\\n').
        replace(/\f/g, '\\f').
        replace(/\r/g, '\\r').
        replace(/'/g, '\\\'').
        replace(/"/g, '\\"');
}