"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = __importDefault(require("./database/mongodb"));
const Form_1 = __importDefault(require("./models/Form"));
const uri = process.env.MONGO;
const app = (0, express_1.default)();
app.use(express_1.default.json());
try {
    const databaseUriUrl = uri;
    (0, mongodb_1.default)(databaseUriUrl);
}
catch (e) {
    console.error(e.message);
    process.exit(0);
}
const PORT = 8000;
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Bem-Vindo PrimeControl");
}));
app.post("/users-form/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const formCreated = yield Form_1.default.create(Object.assign({}, body));
        res.status(201).json(formCreated);
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}));
app.get("/users-form", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const forms = yield Form_1.default.find();
        res.status(201).json(forms);
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}));
app.listen(process.env.PORT || PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
