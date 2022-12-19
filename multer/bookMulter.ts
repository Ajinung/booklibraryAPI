import multer from "multer";
import { Request } from "express";

const storage = multer.diskStorage({
  destination: (req: Request, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req: Request, file, cb) => {
    cb(null, file.originalname);
  },
});

const coverUpload = multer({ storage: storage }).single("coverImage");

export default coverUpload;
