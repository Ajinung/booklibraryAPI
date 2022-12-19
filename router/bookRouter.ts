import { Router } from "express";
import coverUpload from "../multer/bookMulter";
import {
  BookViews,
  getBooks,
  getONe,
  postBook,
  SearchBook,
} from "../controller/bookController";

const router = Router();

router.route("/newbook").post(coverUpload, postBook);
router.route("/allbooks").get(getBooks);
router.route("/onebook/:id").get(getONe);
router.route("/search").get(SearchBook);
router.route("/views/:id").get(BookViews);

export default router;
