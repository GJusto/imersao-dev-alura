import dotenv from "dotenv";
import express from "express";

dotenv.config();

class BookResponse {
  title;
  author;
  year;
  genre;
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }
}

const book = new BookResponse(
  "The Lord of The Rings",
  "J.R.R. Tolkien",
  1954,
  "Fantasy"
);

const app = express();
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}`);
});

app.get("/livro", (req, res) => {
  res.status(200).send(book);
});
