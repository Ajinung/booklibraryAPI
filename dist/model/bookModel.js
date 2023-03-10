"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    author: String,
    title: String,
    coverImage: String,
    ISBN: String,
    Views: [],
    authorImg: String,
    category: String,
    summary: String,
}, { timestamps: true });
const bookModel = mongoose_1.default.model("Books", bookSchema);
exports.default = bookModel;
