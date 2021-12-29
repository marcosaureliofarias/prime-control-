"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = (databaseUri) => {
    const connect = () => {
        mongoose_1.default
            .connect(databaseUri)
            .then(() => {
            return console.info(`Successfully connected to MongoDB`);
        })
            .catch((err) => {
            console.error(`Error connecting to database : ${err.message}`);
            console.error(`Unsuccessfully connecting to MongoDB`);
            return process.exit(1);
        });
    };
    connect();
};
