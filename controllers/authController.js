const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(201).send('User created successfully.');
    } catch (error) {
        res.status(500).send(error);
    }

}

exports.login = async (req, res) => {
    //console.log(email, password);
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        bcrypt.compare(password, user.password, (error, result) => {
            if (result) {
                console.log("u logged in");
                //req.session.userID = user._id;
                res.status(200).redirect("/index");
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: error,
        });
    }
};