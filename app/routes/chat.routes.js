module.exports = (application) => {
    // With Direct Link
    application.get('/chat', (req, res) => {
        application.app.controllers.chat.init(application, req, res);
    });

    // With Form
    application.post('/chat', (req, res) => {
        application.app.controllers.chat.init(application, req, res);
    });
}