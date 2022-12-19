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
exports.SearchBook = exports.BookViews = exports.getONe = exports.getBooks = exports.postBook = void 0;
const bookModel_1 = __importDefault(require("../model/bookModel"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const postBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { author, title, coverImage, views, category, summary } = req.body;
        const ISBNnumber = Math.floor(Math.random() * 10000);
        const ISBNnumber1 = Math.floor(Math.random() * 10000);
        const ISBNnumber2 = Math.floor(Math.random() * 10000);
        const ISBNnumber3 = Math.floor(Math.random() * 10000);
        const cloudImg = yield cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
        const newBook = yield bookModel_1.default.create({
            author,
            title,
            coverImage: cloudImg.secure_url,
            ISBN: `${ISBNnumber}-${ISBNnumber1}-${ISBNnumber2}-${ISBNnumber3}`,
            views,
            authorImg: author.charAt(0).toUpperCase(),
            category,
            summary,
        });
        return res.status(201).json({
            message: `new book posted`,
            data: newBook,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `error posting new book`,
            error: error,
        });
    }
});
exports.postBook = postBook;
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBooks = yield bookModel_1.default.find();
        return res.status(200).json({
            message: `book data gotten successfully`,
            data: allBooks,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `error getting all books from database`,
            error: error,
        });
    }
});
exports.getBooks = getBooks;
const getONe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const singleData = yield bookModel_1.default.findById(req.params.id);
        return res.status(200).json({
            message: `data gotten`,
            data: singleData,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: `error getting book`,
            error: error,
        });
    }
});
exports.getONe = getONe;
// const updateOne = async (req: Request, res: Response): Promise<Response> => {
//     try {
//         const  updateData = await bookModel.findOneAndUpdate()
//     } catch (error) {
//             return res.status(404).json({
//               message: `error updating book`,
//               error: error,
//             });
//     }
// }
const BookViews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const viewData = yield bookModel_1.default.findByIdAndUpdate(req.params.id, {
            $push: req.body.ip,
        }, { new: true });
        return res.status(200).json({
            message: `views added`,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: `error adding view book`,
            error: error,
        });
    }
});
exports.BookViews = BookViews;
const SearchBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const QueryData = req.query;
        const makeSEarch = yield bookModel_1.default.find(QueryData);
        return res.status(200).json({
            message: `searched data`,
            data: makeSEarch,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: `error finding book`,
            error: error,
        });
    }
});
exports.SearchBook = SearchBook;
