import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

//translate request to JSON
App.use(Express.json());

//db
const db = new Database();
db.connect("lab12", "EmilyMacmahon");

App.put("/books/:isbn", (req, res) => {
    const isbn = req.params.isbn;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    res.json({
        isbn: isbn,
        title: title,
        author: author,
        description: description
    });
});

App.get("/books/:isbn", (req, res) => {
    const isbn = req.params.isbn;
    res.json({book: "not found"});
});

App.patch("/books/:isbn", (req, res) => {
    const isbn = req.params.isbn;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    res.json({
        isbn: isbn,
        title: title,
        author: author,
        description: description

    });
});

App.delete("/books/:isbn", (req, res) => {
    const isbn = req.params.isbn;

    const result = await db.deleteOne(isbn);

    res.json(result);

});

App.listen(port);