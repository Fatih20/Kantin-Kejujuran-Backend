import express, { Application, Request, Response, Router } from 'express';
import { storeDataRouter } from './routes/storeData.routes';

const app:Application = express();
const router: Router = express.Router();

// Routes
app.use("/storeData", storeDataRouter);

router.get("/", (req : Request, res : Response) => {
    console.log("Server running");
    res.send("Hello world");
});

app.use(router);
app.listen(process.env.PORT === undefined ? 3001 : parseInt(process.env.PORT), '0.0.0.0',() => console.log('The Server is listening on the port 3000')
);