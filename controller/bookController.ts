import bookModel from "../model/bookModel";
import cloudinary from "../config/cloudinary";
import { Request, Response } from "express";

const postBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { author, title, coverImage, views, category, summary } = req.body;
    const ISBNnumber = Math.floor(Math.random() * 10000);
    const ISBNnumber1 = Math.floor(Math.random() * 10000);
    const ISBNnumber2 = Math.floor(Math.random() * 10000);
    const ISBNnumber3 = Math.floor(Math.random() * 10000);

    const cloudImg = await cloudinary.uploader.upload(req?.file!.path);

    const newBook = await bookModel.create({
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
  } catch (error) {
    return res.status(400).json({
      message: `error posting new book`,
      error: error,
    });
  }
};

const getBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allBooks = await bookModel.find();

    return res.status(200).json({
      message: `book data gotten successfully`,
      data: allBooks,
    });
  } catch (error) {
    return res.status(400).json({
      message: `error getting all books from database`,
      error: error,
    });
  }
};

const getONe = async (req: Request, res: Response): Promise<Response> => {
  try {
    const singleData = await bookModel.findById(req.params.id);

    return res.status(200).json({
      message: `data gotten`,
      data: singleData,
    });
  } catch (error) {
    return res.status(404).json({
      message: `error getting book`,
      error: error,
    });
  }
};

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

const BookViews = async (req: Request, res: Response) => {
  try {
    const viewData = await bookModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: req.body.ip,
      },
      { new: true }
    );

    return res.status(200).json({
      message: `views added`,
    });
  } catch (error) {
    return res.status(404).json({
      message: `error adding view book`,
      error: error,
    });
  }
};

const SearchBook = async (req: Request, res: Response) => {
  try {
    const QueryData = req.query;
    const makeSEarch = await bookModel.find(QueryData);

    return res.status(200).json({
      message: `searched data`,
      data: makeSEarch,
    });
  } catch (error) {
    return res.status(404).json({
      message: `error finding book`,
      error: error,
    });
  }
};
export { postBook, getBooks, getONe, BookViews, SearchBook };
