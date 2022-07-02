"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const storeData_routes_1 = require("./routes/storeData.routes");
const app = (0, express_1.default)();
const router = express_1.default.Router();
// Routes
app.use("/storeData", storeData_routes_1.storeDataRouter);
router.get("/", (req, res) => {
    console.log("Server running");
    res.send("Hello world");
});
app.use(router);
app.listen(process.env.PORT === undefined ? 3001 : parseInt(process.env.PORT), '0.0.0.0', () => console.log('The Server is listening on the port 3000'));
