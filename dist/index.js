"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const storeData_routes_1 = __importDefault(require("./routes/storeData.routes"));
// import extractJWT from './middleware/extractJWT';
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./utilities/config"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const extractJWT_1 = __importDefault(require("./middleware/extractJWT"));
const dotenv = require('dotenv');
dotenv.config();
const app = (0, express_1.default)();
const router = express_1.default.Router();
// Middlewares
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    const requestOrigin = req.headers.origin;
    res.setHeader('Access-Control-Allow-Origin', config_1.default.clientSite.includes(requestOrigin) ? requestOrigin : config_1.default.clientSite[0]);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', "true");
    // Pass to next layer of middleware
    next();
});
app.use((req, res, next) => {
    const requestOrigin = req.headers.origin;
    (0, cors_1.default)({ credentials: true, origin: config_1.default.clientSite.includes(requestOrigin) ? requestOrigin : config_1.default.clientSite[1] });
    next();
});
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(extractJWT_1.default);
app.use((req, res, next) => {
    // console.log(req);
    // console.log(req.cookies)
    next();
});
// Routes
app.use("/store", storeData_routes_1.default);
app.use("/user", user_routes_1.default);
router.get("/", (req, res) => {
    res.send("Hello world");
});
router.get("/test", (req, res) => {
    // console.log(req.cookies);
    res.send({ message: "Test complete" });
});
app.use(router);
app.listen(config_1.default.port, '0.0.0.0', () => console.log('The Server is listening on the port 3000'));
