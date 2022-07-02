import express, { Application, Request, Response, Router } from 'express';
import cookieParser from 'cookie-parser';

import { storeDataRouter } from './routes/storeData.routes';
// import extractJWT from './middleware/extractJWT';
import cors from "cors";
import serverConfig from './utilities/config';

const dotenv = require('dotenv');
dotenv.config();

const app:Application = express();
const router: Router = express.Router();

// Middlewares
app.use(cors({ credentials: true, origin: serverConfig.clientSite}));
app.use(express.json())
app.use(cookieParser())
// app.use(extractJWT);

// Routes
app.use("/storeData", storeDataRouter);

router.get("/", (req : Request, res : Response) => {
    console.log("Server running");
    res.send("Hello world");
});

router.get("/test", (req : Request, res : Response) => {
    res.send({message : "Test successful"});
})

app.use(router);
app.listen(serverConfig.port, '0.0.0.0',() => console.log('The Server is listening on the port 3000')
);