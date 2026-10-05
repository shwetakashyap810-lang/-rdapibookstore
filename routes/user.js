const express = require('express');
const UserController = require('../controllers/UserController')
const router = express.Router();

router.post('/admin/login', (req, res) => {
    UserController.doAdminLogin(req, res)
})
router.get('/users', (req, res) => {
    UserController.getUsers(req, res)
})
module.exports = router