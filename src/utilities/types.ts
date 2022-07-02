export interface ISoldItemLite {
    name : string,
    imageLink : string,
    description : string,
    price : number,

}

export interface ISoldItem extends ISoldItemLite {
    milisecondCreated : number,
    dateCreated : string,
}


export interface ISoldItemRaw extends ISoldItem {
    id : number
}