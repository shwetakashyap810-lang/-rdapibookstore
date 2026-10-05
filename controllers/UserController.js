const User = require('../models/User')
const bcrypt = require('bcrypt');
async function doAdminLogin(req, res) {
    try {
        let email = req.body.email;
        let user = await User.findOne({ email: email });
        if (!user) {
            res.status(400).send({ message: 'invalid user/password' });
        } else {
            let validPassword = await bcrypt.compare(req.body.password, user.password);
            if (validPassword) {
                user.lastLogin = new Date();
                await user.save();
                res.status(200).send({ success: true, data: user });
            } else {
                res.status(400).send({ message: 'invalid user/password' });
            }
        }

    } catch (err) {
        console.log(err)
        res.status(400).send({ message: err });
    }
}
async function getUsers(req, res) {
    try {
        let users = await User.find({});
        //console.log(users)
        res.status(200).send({ data: users })
    } catch (err) {
        console.log(err)
        res.status(400).send({ messaage: 'Something Went wrong' })
    }
}

module.exports = {
    doAdminLogin,
    getUsers
}