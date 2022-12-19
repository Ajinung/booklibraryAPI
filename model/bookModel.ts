import mongoose from "mongoose";

interface BookData {
  author: string;
  title: string;
  coverImage: string;
  ISBN: string;
  views: [];
  authorImg: string;
  category: string;
  summary: string;
}

interface iBook extends BookData, mongoose.Document {}

const bookSchema = new mongoose.Schema(
  {
    author: String,
    title: String,
    coverImage: String,
    ISBN: String,
    Views: [],
    authorImg: String,
    category: String,
    summary: String,
  },
  { timestamps: true }
);

const bookModel = mongoose.model<iBook>("Books", bookSchema);

export default bookModel;
