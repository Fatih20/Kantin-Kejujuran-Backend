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

export type User = {
    student_id : string,
    password : string
}

export type UserOpaque = Omit<User, "password"> & {
    password : undefined
}

const possibleRegisterErrorPositionList = ["Checking uniqueness", "Inserting new user", "Done"] as const;

export type RegisterErrorPosition = typeof possibleRegisterErrorPositionList[number];

const possibleLoginErrorPositionList = ["Checking uniqueness", "Getting new password", "Done"] as const;

export type LoginErrorPosition = typeof possibleLoginErrorPositionList[number];

const possibleLoginErrorManMadeList = ["notRegistered", "wrongPassword"] as const;

export type LoginErrorManMade = (typeof possibleLoginErrorManMadeList[number])

const possibleRegisterErrorManMadeList = ["registeredAlready"] as const;
export type RegisterErrorManMade = (typeof possibleRegisterErrorManMadeList[number]);

export type RegisterQueryReturn = {
    position : RegisterErrorPosition,
    errorManMade? : RegisterErrorManMade,
    error : unknown,
    response : any
}

export type LoginQueryReturn = {
    response : any,
    error : unknown,
    errorManMade? : LoginErrorManMade,
    position : LoginErrorPosition,
}
