const express = require('express')
const HomeController = require('../../controllers/user/HomeController')

const router = express.Router();
router.get('/user/books', (req, res) => {
    HomeController.getBooks(req, res)
})
router.get('/user/book/:id', (req, res) => {
    HomeController.getBookForUser(req, res)
})

module.exports = router