module.exports = app => {

    // Base URLS
    app.use('/api', require('./coasters.routes.js'))
}