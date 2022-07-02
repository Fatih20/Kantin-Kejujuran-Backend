import pg from "pg";
import serverConfig from "../utilities/config";

const Pool = pg.Pool;

const {user, password, host, name, port } = serverConfig.database

// const pool = new Pool({
//     user,
//     password,
//     host,
//     database : name,
//     port
// })

const proConfig = {
    connectionString : serverConfig.database.url
}

const pool = new Pool (proConfig);

export default pool;