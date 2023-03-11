const config = require('../config')
const soRouter = require('./soRouter')

const Router = (app) => {
	app.use(config.baseURL + '/sales-order', soRouter)
}

module.exports = Router