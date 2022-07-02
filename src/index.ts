import express, { Application, Request, Response, Router } from 'express';

const app:Application = express();
const router: Router = express.Router();

router.get("/", (req : Request, res : Response) => {
    console.log("Server running");
    res.send("Hello world");
});

app.use(router);
console.log('The Server is listening on the port 3000');
app.listen(3000);