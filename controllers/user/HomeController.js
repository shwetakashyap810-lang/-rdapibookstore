const Book = require('../../models/Book');
async function getBooks(req, res) {
    try {
        let books = await Book.find({});

        res.status(200).send({ data: books })
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: 'Something went wrong' })
    }
}
async function getBookForUser(req, res) {
    try {
        let id = req.params.id;
        let book = await Book.findOne({ _id: id });
        console.log(book);
        res.status(200).send({ data: book })
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: 'Something went wrong' })
    }
}
module.exports = {
    getBooks,
    getBookForUser
}