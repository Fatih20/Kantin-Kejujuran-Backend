import express, { Application, Request, Response, Router } from 'express';
import cookieParser from 'cookie-parser';
import pool from './database/db';

import { storeDataRouter } from './routes/storeData.routes';
// import extractJWT from './middleware/extractJWT';
import cors from "cors";
import serverConfig from './utilities/config';

const dotenv = require('dotenv');
dotenv.config();

const app:Application = express();
const router: Router = express.Router();

// Middlewares
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', serverConfig.clientSite[0]);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(cors({ credentials: true, origin: serverConfig.clientSite}));
app.use(express.json());
app.use(cookieParser());

// app.use(extractJWT);

// Routes
app.use("/store", storeDataRouter);

router.get("/", (req : Request, res : Response) => {
    res.send("Hello world");
});

router.get("/test", (req : Request, res : Response) => {
    res.send({message : "Test successful"});
})

app.use(router);
app.listen(serverConfig.port, '0.0.0.0',() => console.log('The Server is listening on the port 3000')
);