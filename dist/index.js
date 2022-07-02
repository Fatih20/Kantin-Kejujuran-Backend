"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
router.get("/", (req, res) => {
    console.log("Server running");
    res.send("Hello world");
});
app.use(router);
console.log('The Server is listening on the port 3000');
app.listen(3000);
