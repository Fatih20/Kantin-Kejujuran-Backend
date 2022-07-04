import dotenv from "dotenv";
dotenv.config();

const serverConfig = {
    port : process.env.PORT === undefined ? 3001 : parseInt(process.env.PORT),
    clientSite : (process.env.CLIENT_SITE ?? "http://localhost:8080").split(","),
    database : {
        url : process.env.DATABASE_URL as string,
        host : process.env.DATABASE_HOST as string,
        name : process.env.DATABASE_NAME as string,
        password : process.env.DATABASE_PASSWORD as string,
        port : parseInt(process.env.DATABASE_PORT as string),
        user : process.env.DATABASE_USER as string
    },
    jwt : {
        issuer : process.env.ISSUER as string, 
        keyGeneratingJWT : process.env.KEYJWT as string,
        expireTime : parseInt(process.env.EXPIRE_TIME as string)
    }
}

export default serverConfig;