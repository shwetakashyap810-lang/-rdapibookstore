const User = require('./models/User')
const bcrypt = require('bcrypt')
async function createAdmin() {
    try {
        let user = await User.findOne({ email: 'shwetakashyap810@yopmail.com' });
        //console.log(user)
        if (user) {
            console.log('user updated successfully...');
        } else {
            user = new User();
            user.firstName = 'Shweta';
            user.lastName = 'Kashyap';
            user.mobileNo = '6399611272';
            user.email = "shwetakashyap810@yopmail.com";
            let password = bcrypt.hashSync('shweta@123', 10);
            user.password = password;
            user.userType = 'admin';
            await user.save();
            console.log("user created successfully....");
        }
    } catch (err) {
        console.log(err)
    }
}
module.exports = createAdmin