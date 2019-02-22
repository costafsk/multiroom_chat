module.exports.init = (application ,req, res) => {
    req.assert('nickname', 'Nome ou Apelido é Obrigatório!').notEmpty();
    req.assert('nickname', 'Nome ou Apelido é deve conter entre 3 - 15 Caracteres').len(3, 15);

    const errors = req.validationErrors();

    if (errors) {
        res.render('home.ejs', {errors: errors, nickname: req.body.nickname});
        return;
    }
    
    application.get('io').emit('notification', {
        nickname: req.body.nickname, 
        msg: ' acabou de entrar no chat'
    });
    
    res.render('chat.ejs', {nickname: req.body.nickname});
}