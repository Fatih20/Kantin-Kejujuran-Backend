const serverConfig = {
    port : process.env.PORT === undefined ? 3001 : parseInt(process.env.PORT),
    clientSite : (process.env.CLIENT_SITE ?? "http://localhost:8080").split(" ") 
}

export default serverConfig;