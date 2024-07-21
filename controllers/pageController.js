exports.getIndexPage = (req, res) => {
    res.render('index');
}
exports.getLoginPage = (req, res) => {
    res.render('login');
}
exports.getRegisterPage = (req, res) => {
    res.render("createAcc");
}