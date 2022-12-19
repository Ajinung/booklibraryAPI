"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookMulter_1 = __importDefault(require("../multer/bookMulter"));
const bookController_1 = require("../controller/bookController");
const router = (0, express_1.Router)();
router.route("/newbook").post(bookMulter_1.default, bookController_1.postBook);
router.route("/allbooks").get(bookController_1.getBooks);
router.route("/onebook/:id").get(bookController_1.getONe);
router.route("/search").get(bookController_1.SearchBook);
router.route("/views/:id").get(bookController_1.BookViews);
exports.default = router;
