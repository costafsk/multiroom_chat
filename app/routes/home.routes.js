module.exports = (application) => {
    application.get('/', (req, res) => {
        application.app.controllers.home.render(res);
    })
}