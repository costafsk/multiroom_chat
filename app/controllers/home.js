module.exports.render = (res) => {
    res.render('./home.ejs', {errors: {}, nickname: ''});
}