import pg from "pg";
import serverConfig from "../utilities/config";

const Pool = pg.Pool;

const {user, password, host, name, port } = serverConfig.database

const databasePoolConfig = {
    user,
    password,
    host,
    database : name,
    port,
    ssl : {rejectUnauthorized : false}
}

// const pool = new Pool({
//     user,
//     password,
//     host,
//     database : name,
//     port
// })

const proConfig = {
    connectionString : serverConfig.database.url,
    ssl : {rejectUnauthorized : false}
}

const pool = new Pool (databasePoolConfig);
// const pool = new Pool (proConfig);

export default pool;