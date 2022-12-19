"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = "mongodb://localhost";
const LiveURI = "mongodb+srv://Izick:Bashiware97@cluster0.xntposv.mongodb.net/?retryWrites=true&w=majority";
mongoose_1.default
    .connect(LiveURI)
    .then(() => {
    console.log("Connected");
})
    .catch((error) => {
    console.log("An Error");
});
