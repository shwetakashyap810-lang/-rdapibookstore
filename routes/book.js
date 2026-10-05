const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const BookController = require('../controllers/BookController')
const route = express.Router();
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extended: false
}));
const uploader = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 10 * 1024 * 1024 }
})
route.post('/add/book', uploader.single("file"), (req, res) => {
    BookController.addBook(req, res)
})
route.get('/books', (req, res) => {
    BookController.getBooks(req, res)
})
route.delete('/delete/book/:id', (req, res) => {
    BookController.deleteBook(req, res)
})
route.get('/book/for/edit/:id', (req, res) => {
    BookController.getBookForEdit(req, res)
})
route.put('/edit/book/:id', (req, res) => {
    BookController.editBook(req, res)
})
module.exports = route
