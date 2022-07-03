export interface ISoldItemLite {
    name : string,
    imagelink : string,
    description : string,
    price : number,
}

export interface ISoldItem extends ISoldItemLite {
    milisecondcreated : number,
    datecreated : string,
}

export interface ISoldItemRaw extends ISoldItem {
    id : number
}

export type ISoldItemRawString = Record<keyof ISoldItemRaw, string>
