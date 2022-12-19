import mongoose from "mongoose";

const URI = "mongodb://localhost";
const LiveURI =
  "mongodb+srv://Izick:Bashiware97@cluster0.xntposv.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(LiveURI)
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log("An Error");
  });
