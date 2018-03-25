const db = require('./startup/db')
const routes = require('./startup/routes')

// start
db()
routes()


