import { ISoldItem, ISoldItemRaw, ISoldItemRawString } from "./types";

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

export function readAndStringifyItem (item : ISoldItem) {
    const {datecreated, name, price, description, imagelink, milisecondcreated} = item;

    return {name : JSON.stringify(name), price, description : JSON.stringify(description), imagelink : JSON.stringify(imagelink), milisecondcreated, datecreated : JSON.stringify(datecreated)} as ISoldItem
}

export function readAndParseItem (item : ISoldItemRaw) {
    const {datecreated, name, price, description, imagelink, milisecondcreated, id} = item;

    return {name : JSON.parse(name), price, description : JSON.parse(description), imagelink : JSON.parse(imagelink), milisecondcreated, datecreated : JSON.parse(datecreated), id} as ISoldItem
}