"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const storeData_routes_1 = require("./routes/storeData.routes");
// import extractJWT from './middleware/extractJWT';
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./utilities/config"));
const dotenv = require('dotenv');
dotenv.config();
const app = (0, express_1.default)();
const router = express_1.default.Router();
// Middlewares
app.use((0, cors_1.default)({ credentials: true, origin: config_1.default.clientSite }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// app.use(extractJWT);
// Routes
app.use("/storeData", storeData_routes_1.storeDataRouter);
router.get("/", (req, res) => {
    console.log("Server running");
    res.send("Hello world");
});
router.get("/test", (req, res) => {
    res.send({ message: "Test successful" });
});
app.use(router);
app.listen(config_1.default.port, '0.0.0.0', () => console.log('The Server is listening on the port 3000'));
