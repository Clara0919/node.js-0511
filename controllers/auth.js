const getLogin = (req, res) => {
    res.status(200)
        .render('auth/login', {  //在views下面開一個auth資料夾把login.ejs放進去
            path: '/login',
            pageTitle: 'Login'
        });
};

const postLogin = (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/');
    } else {
        console.log('欄位尚未填寫完成！')
    }
};

const postLogout = (req, res) => {
    // TODO: 實作 logout 機制
    res.redirect('/login')
}

module.exports = {
    getLogin,
    postLogin,
    postLogout,
};